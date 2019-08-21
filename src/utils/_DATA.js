import rawBooks from "../data/books.json";

let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    books: {
      currentlyReading:[],
      wantToRead: [],
      read:[]
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


let books={};
function generateBooks () {
  for (let i=0 ; i< rawBooks.length; i++) {
    let book = formatBook(rawBooks[i]);
    books[book.id] = book;
  }
}

generateBooks();

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

export function _saveBookChoice ({ authedUser, bid, choice }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          books: {
            ...users[authedUser].books,
            [choice]: users[authedUser].books[choice].concat([bid])
          }
        }
      }

      books = {
        ...books,
        [bid]: {
          ...books[bid],
          users: books[bid].users.concat([authedUser])
        }
      }
      res()
    }, 500)
  })
}
