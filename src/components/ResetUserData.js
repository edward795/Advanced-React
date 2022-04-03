import React from "react";
import { resetFetchedUsers } from "../redux";
import { connect } from "react-redux";

const ResetUserData = (props) => {
  const { resetFetchedUsersData } = props;
  return (
    <div>
      <button onClick={() => resetFetchedUsersData()}>
        Reset Fetched Data
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetFetchedUsersData: () => {
      dispatch(resetFetchedUsers());
    },
  };
};

export default connect(null, mapDispatchToProps)(ResetUserData);
