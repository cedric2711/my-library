// libraries
import React, {Component} from "react";
import {connect} from "react-redux";

// actions
import {handleUpdateChoice} from "../actions/books";

class Book extends Component {

    handleChange = (e) => {
        const {users, authedUser, bookType, book, dispatch} = this.props;
        const newChoice = e.target.value;
        let usersBooks = users[authedUser].books;
        if(bookType && bookType!=="none") {
            usersBooks[bookType]= usersBooks[bookType].filter((bID) => (bID!==book.id));
        }

        if(newChoice && newChoice!=="none") {
            usersBooks[newChoice]= usersBooks[newChoice].concat([book.id]);
        }
        dispatch(handleUpdateChoice({
            bID: book.id,
            usersBooks,
        }))
        e.preventDefault();
    }

    render () {
        const {book, bookType} = this.props;

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">

                        <img className={"book-cover"+((book.imageLink)?" default-book-cover":"")} style={{ width: 128, height: 193}}  src={require(`../icons/${book.imageLink}`)}/>
                        <div className="book-shelf-changer">
                        <select value={bookType===undefined? "none" : bookType} onChange={(e)=>this.handleChange(e)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                        {
                            // eslint-disable-next-line
                            <a className="book-preview" target="_blank" href={book.link} title="Preview" ></a>
                        }
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.author}
                    </div>
                </div>
            </li>
        );
    }
}

const mapStateToProps = ({ books, users, authedUser }, { bookID, bookType }) => {

    return {
        books,
        users,
        authedUser,
        book: books[bookID],
        bookType
    }
}

export default connect(mapStateToProps)(Book)