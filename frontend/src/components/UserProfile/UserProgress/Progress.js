import React from 'react'
import "./progress.css";
import UserSidebar from "../UserSidebar/usersidebar";
import UserNavbar from "../UserNavbar/usernavbar";
import WidgetLg from "../widgetLg/widgetlg";

function Progress() {
  return (
    <div className="user-home-inner">
      <UserSidebar />
      <div className="user-homeContainer-inner">
        <UserNavbar />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Progress


