import React from "react";
import { connect } from "react-redux";
import { useState } from "react";

const ListOfClickHandlers = ({ userData }) => {
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

  return (
    <div>
      {" "}
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
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

export default connect(mapStateToProps, null)(ListOfClickHandlers);
