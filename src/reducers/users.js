import { RECEIVE_USERS } from "../actions/users";
import {UPDATE_BOOK} from "../actions/books";

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case UPDATE_BOOK : 
      return {
        ...state,
        [action.book.authedUser]:{
          ...state[action.book.authedUser],
          books: action.book.userbooks
        }
      }
    default :
      return state
  }
}