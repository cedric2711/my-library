import booksData from "../data/books.json";

let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    books: {
      currentlyReading:["nx28q2hacbhwnxbmaiu6lo", "si9ibfr2cp58zih5a5zps", "60bhycw3j5da2r33o4jhq"],
      wantToRead: ["hhu4wpfzdysdq01m0xxtis", "uit6ngrlk2kjvh7mysbmd"],
      read:["iigpcw401xr5kngj3ijxmw", "33xw1cgug71f8xeb1a3dlv", "svvptwogslrqchpsofwhmq", "nx66j67f1rkmr4nqjiu2p"]
    }
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    books: {
      currentlyReading:[],
      wantToRead: [],
      read:[]
    }
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    books: {
      currentlyReading:[],
      wantToRead: [],
      read:[]
    }
  }
}

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
    const formattedBook = formatBook(book)

    setTimeout(() => {
      books = {
        ...books,
        [formattedBook.id]: formattedBook
      }

      res(formattedBook)
    }, 1000)
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
