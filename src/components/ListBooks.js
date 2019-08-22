// libraries
import React from "react";
import { connect } from "react-redux";
import Book from "./Book";

function ListBooks({ bookType, booksToDisplay }) {
    let sectionTitle = {
        currentlyReading: "Currently Reading",
        wantToRead: "Want to Read",
        read: "Read",
    }
    return (
        <div>
            <h2 className="bookshelf-title">{sectionTitle[bookType]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        booksToDisplay.map((book) => (<Book key={book.id} bookID={book.id} bookType={bookType} />))
                    }
                </ol>
            </div>
        </div>
    );
}

const mapStateToProps = ({ books, users, authedUser }, { bookType }) => {
    const bookIDsToDisplay = users[authedUser].books[bookType];
    const booksToDisplay = bookIDsToDisplay.map((bid) => (books[bid]));
    return {
        bookType,
        booksToDisplay
    }

}

export default connect(mapStateToProps)(ListBooks)