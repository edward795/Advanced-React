import React from "react";
import { resetFetchedUsers } from "../redux";
import { connect } from "react-redux";

export const ResetUserData = (props) => {
  const { resetFetchedUsersData } = props;
  return (
    <div>
      <button onClick={() => resetFetchedUsersData()}>
        Reset Fetched Data
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
    isLoading: state.users.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetFetchedUsersData: () => {
      dispatch(resetFetchedUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetUserData);
