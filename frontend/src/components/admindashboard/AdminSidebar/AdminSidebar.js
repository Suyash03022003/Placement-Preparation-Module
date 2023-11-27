import React from 'react'
import "./adminsidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MainLogo from '../../../assets/mainLogo.jfif';
import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className="admin-sidebar">
            <div className="top">
                <Link to="/admin" style={{ textDecoration: "none" }}>
                    <span className="admin-logo">
                        <img
                            src={MainLogo}
                            alt="Logo"
                            style={{ width: '40px', height: '40px' }}
                        />
                    </span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <Link to="/admin" className='adminSidebarLink'>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/admin/user" className='adminSidebarLink'>
                        <li>
                            <AccountBoxIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/admin/addcontent" className='adminSidebarLink'>
                        <li>
                            <NoteAltIcon className="icon" />
                            <span>Add Topic</span>
                        </li>
                    </Link>
                    <Link to="/admin/addprogques" className='adminSidebarLink'>
                        <li>
                            <NoteAltIcon className="icon" />
                            <span>Add Programming Question</span>
                        </li>
                    </Link>
                    <Link to="/admin/addquiz" className='adminSidebarLink'>
                        <li>
                            <NoteAltIcon className="icon" />
                            <span>Add Quiz</span>
                        </li>
                    </Link>
                    <Link to="/admin/addquiz" className='adminSidebarLink'>
                        <li>
                            <NoteAltIcon className="icon" />
                            <span>Add Interview Question</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar