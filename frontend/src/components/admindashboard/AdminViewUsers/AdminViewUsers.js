import React from 'react';
import "./user.scss";
import UserTable from "../usertable/UserTable";

function User() {
  return (
    <div className="list">
      <div className="listContainer">
        <UserTable />
      </div>
    </div>
  )
}


export default User