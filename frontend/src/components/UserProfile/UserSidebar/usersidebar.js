import React from 'react'
import "./usersidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";

const usersidebar = () => {
    return (
        <div className="user-sidebar">
            <div className="center">
                <ul>
                    <Link to="/user/profile" className='userSidebarLink' >
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/user/profile/progress" className='userSidebarLink' >
                        <li>
                            <AccountBoxIcon className="icon" />
                            <span>Users Progress</span>
                        </li>
                    </Link>
                    {/* <Link to="/user/profile/calender" className='userSidebarLink' >
                        <li>
                            <NoteAltIcon className="icon" />
                            <span>Calender</span>
                        </li>
                    </Link> */}
                    <Link to="/user/profile/logout" className='userSidebarLink' >
                        <li>
                            <ExitToAppIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default usersidebar
