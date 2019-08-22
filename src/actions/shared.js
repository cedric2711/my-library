import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";
import { receiveBooks } from "./books";

const AUTHED_ID = null;

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, books }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveBooks(books))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}