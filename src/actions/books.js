import { saveBookChoice, saveBook } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS"
export const ADD_BOOK = "ADD_BOOK"
export const UPDATE_BOOK = "UPDATE_BOOK"

function addBook (book) {
  return {
    type: ADD_BOOK,
    book,
  }
}

export function handleAddBook ({author, country, imageLink, language, link, pages, title, year}) {
  return (dispatch, getState) => {

    dispatch(showLoading())

    return saveBook({
      author,
      country,
      imageLink,
      language,
      link,
      pages,
      title,
      year
    }).then((book) => {
        dispatch(addBook(book))
      })
      .then(() => dispatch(hideLoading()))
  }
}

function addBookChoice (book) {
  return {
    type: UPDATE_BOOK,
    book,
  }
}

export function handleUpdateChoice (response) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    var book={
      authedUser,
      bid: response.bID,
      userbooks: response.usersBooks
    }
    dispatch(addBookChoice(book))

    return saveBookChoice(book)
      .catch((e) => {
        console.warn("Error in handleUpdateChoice: ", e)
        dispatch(addBookChoice(book))
        alert("The was an error in updating a book. Try again.")
      })
  }
}

export function receiveBooks (books) {
  return {
    type: RECEIVE_BOOKS,
    books,
  }
}