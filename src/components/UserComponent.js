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

function UserComponent({
  userData,
  fetchUsers,
  isLoading,
  resetFetchedUsersData,
}) {
  const clickHandler = () => {
    fetchUsers();
  };

  //method 1
  const liClickHandler = (user, index) => {
    alert("selected user " + index + " and name: " + user.name);
  };

  //method 2
  const [id, setID] = useState();
  const [selected, setSelected] = useState();

  //method 3
  const [seletcedUsers, setSelectedUsers] = useState([]);
  const storeSelected = (key, user) => {
    let newObj = { id: key, name: user };
    setSelectedUsers([...seletcedUsers, newObj]);
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

      <ToastContainer />
      <div>
        <div>
          <h2>Mapping individual click handlers to a list of items.</h2>
          <h3>Method 1</h3>
        </div>
        {userData &&
          userData.users &&
          userData.users.map((user, index) => (
            <li key={index} onClick={(e) => liClickHandler(user, index)}>
              {user.name}
            </li>
          ))}
      </div>
      <div>
        <h3>Method 2</h3>
        <h3>
          Selected User:{id} and Name:{selected}
        </h3>
        {userData &&
          userData.users &&
          userData.users.map((user, index) => (
            <li
              key={index}
              onClick={(e) => {
                setSelected(user.name);
                setID(index);
              }}
            >
              {user.name}
            </li>
          ))}
      </div>
      <div>
        <h3>Method 2</h3>
        <h4>Store multiple seletced user</h4>
        <h3>{JSON.stringify(seletcedUsers)}</h3>
        {userData &&
          userData.users &&
          userData.users.map((user, index) => (
            <li key={index} onClick={(e) => storeSelected(index, user.name)}>
              {user.name}
            </li>
          ))}
      </div>
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
