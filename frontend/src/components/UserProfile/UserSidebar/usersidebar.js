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

            <hr />
            <div className="user-center">
                <ul>
                    <li>
                        <DashboardIcon className="user-icon" />
                        <Link to="/user/profile" >
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <AccountBoxIcon className="user-icon" />
                        <Link to="/user/progress">
                            <span>Users Progress</span>
                        </Link>
                    </li>
                    <li>
                        <NoteAltIcon className="user-icon" />
                        <Link to="/user/calender">
                            <span>Calender</span>
                        </Link>
                    </li>
                    <li>
                        <ExitToAppIcon className="user-icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default usersidebar
