// libraries
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Book from "./Book";

class Library extends Component {
    state = {
        filteredBookKeys: [],
        query: ""
    }

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

    updateQuery = (value) => {
        const {books, bookKeys} = this.props;
        const filteredBookKeys = bookKeys.filter((bID) => {
            const book = books[bID];
            if (book["author"].toLowerCase().includes(value.toLowerCase()) || book["title"].toLowerCase().includes(value.toLowerCase())) {
                return bID;
            }
            return false;
        })
        this.setState({
            query:value,
            filteredBookKeys
        });
    }

    render () {
        const {books, authedUser, bookKeys} = this.props;
        const { query, filteredBookKeys } = this.state

        const booksToShow = query.length ? filteredBookKeys : bookKeys;
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/">
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
            </div>
            <div className="search-books-results">
                {(!booksToShow.length)?
                    <div>The Books is not available </div>
                    :
                    <ol className="books-grid">
                    {
                        booksToShow.map((bID) => {
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