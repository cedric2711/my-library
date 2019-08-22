// libraries
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Book from './Book';

class Library extends Component {
    extractBookType = (bID) => {
        const {users, authedUser} = this.props;
        const {books} = users[authedUser];
        const userBookKeys = Object.keys(books);
        for (let i=0; i<userBookKeys.length; i++) {
            if (books[userBookKeys[i]].includes(bID)) {
                return userBookKeys[i];
            }
        }

        return "none";
    }

    render () {
        const {books, users, authedUser, bookKeys} = this.props;
        return (
            <div className="search-books">
            {/* <div className="search-books-bar">
                <Link
                    className="close-search"
                    to='/'>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e)=> this.updateQuery(e.currentTarget.value)}
                        />

                </div>
            </div> */}
            <div className="search-books-results">
                {(!books)?
                    <div>The Books is not available </div>
                    :
                    <ol className="books-grid">
                    {
                        bookKeys.map((bID) => {
                            const book = books[bID];
                            let bookType = "none";
                            if (book.users.includes(authedUser)) {
                                bookType = this.extractBookType(bID);
                            }
                            return <Book key={bID} bookID={bID} bookType={bookType}/>
                        }
                    )}
                    </ol>
                }

            </div>
          </div>
        );
    }
}

const mapStateToProps = ({books, users, authedUser}) => {
    return {
        books,
        users,
        authedUser,
        bookKeys: Object.keys(books)
    }
}

export default connect(mapStateToProps)(Library)