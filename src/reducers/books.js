import { RECEIVE_BOOKS, ADD_BOOK, UPDATE_BOOK} from "../actions/books";

export default function books (state = {}, action) {
  switch(action.type) {
    case RECEIVE_BOOKS :
      return {
        ...state,
        ...action.books
      }
    case ADD_BOOK :
      return {
        ...state,
        [action.book.id]:action.book
      }
    case UPDATE_BOOK :
      return {
        ...state,
        [action.book.bid]:{
          ...state[action.book.bid],
          users: [...new Set(state[action.book.bid].users.concat([action.book.authedUser]))]  
        }
      }
    default :
      return state
  }
}