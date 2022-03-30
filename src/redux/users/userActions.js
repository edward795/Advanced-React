import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  RESET_USERS_DATA,
} from "./userTypes";
import axios from "axios";
import store from "../store";
import { toast } from "react-toastify";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const resetUsersData = () => {
  return {
    type: RESET_USERS_DATA,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    console.log(store.getState());

    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        console.log("Users Data:", users);
        dispatch(fetchUsersSuccess(users));
        toast.success("Fetch Success");
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
        toast.error("fetch failure!");
      });
  };
};

export const resetFetchedUsers = () => {
  return (dispatch) => {
    dispatch(resetUsersData());
    console.log("user data reset!");
  };
};
