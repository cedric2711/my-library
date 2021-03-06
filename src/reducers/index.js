import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import books from "./books";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  users,
  books,
  loadingBar: loadingBarReducer,
})