import {
  _getUsers,
  _saveBook,
  _saveBookChoice,
  _getBooks
} from "./_DATA.js"

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getBooks()
  ]).then(([users, books]) => ({
    users,
    books
  }))
}

export function saveBook (info) {
  return _saveBook(info);
}
export function saveBookChoice (info) {
  return _saveBookChoice(info);
}