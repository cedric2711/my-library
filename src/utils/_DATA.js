import booksData from "../data/books.json";
import userData from "../data/users.json";

let users = userData

let books = booksData
function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getBooks () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...books}), 1000)
  })
}

function formatBook ({ author, country, imageLink, language, link, pages, title, year }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    country,
    imageLink,
    language,
    link,
    pages,
    title,
    year,
    users: []
  }
}

export function _saveBook (book) {
  return new Promise((res, rej) => {
    const formattedBook = formatBook(book);
    setTimeout(() => {
      books = {
        ...books,
        [formattedBook.id]: formattedBook
      }  
      res(formattedBook)
    }, 1000);
  })
}

export function _saveBookChoice ({ authedUser, bid, userbooks }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          books: userbooks
        }
      }

      books = {
        ...books,
        [bid]: {
          ...books[bid],
          users: [...new Set(books[bid].users.concat([authedUser]))]
        }
      }
      res({books, users})
    }, 500)
  })
}
