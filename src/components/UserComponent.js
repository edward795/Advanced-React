import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import { Loader } from "./Loader";
import store from "../redux/store";
import { data } from "./data.js";
import { resetFetchedUsers } from "../redux";
import { ToastContainer, toast } from "react-toastify";
import "./UserComponent.css";
import { useState } from "react";
import ResetUserData from "./ResetUserData";
import ListOfClickHandlers from "./ListOfClickHandlers";

function UserComponent({
  userData,
  fetchUsers,
  isLoading,
  resetFetchedUsersData,
}) {
  const clickHandler = () => {
    fetchUsers();
  };

  return isLoading ? (
    <Loader />
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <button onClick={clickHandler}>Fetch Users List</button>

      <ResetUserData />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ListOfClickHandlers />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
    isLoading: state.users.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    resetFetchedUsersData: () => {
      dispatch(resetFetchedUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
