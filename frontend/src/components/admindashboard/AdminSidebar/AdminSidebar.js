import React from 'react'
import "./adminsidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className="admin-sidebar">
            <div className="top">
                <Link to="/admin" style={{ textDecoration: "none" }}>
                    <span className="admin-logo">
                        <img
                            src={process.env.PUBLIC_URL + '/images/logo-ppm.png'}
                            alt="Logo"
                            style={{ width: '40px', height: '40px' }}
                        />
                    </span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon className="icon" />
                        <Link to="/admin" >
                            <span>Dashboard</span>
                        </Link>

                    </li>
                    <li>
                        <AccountBoxIcon className="icon" />
                        <Link to="/admin/user">
                            <span>Users</span>
                        </Link>

                    </li>
                    {/* <li>
                        <InsertChartIcon className="icon" />
                        <Link to="/home/statistics">
                            <span>Statistics</span>
                        </Link>
                    </li> */}
                    <li>
                        <NoteAltIcon
                            className="icon" />
                        <Link to="/admin/addcontent">
                            <span>Add Content</span>
                        </Link>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>


        </div>
    );
};

export default AdminSidebar
