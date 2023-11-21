import React from 'react'
import "./user.scss"
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import UserTable from "../usertable/UserTable"

function User() {
  return (
    <div className="list">
      <AdminSidebar />
      <div className="listContainer">
        <AdminNavbar />
        <UserTable />
      </div>
    </div>
  )
}


export default User