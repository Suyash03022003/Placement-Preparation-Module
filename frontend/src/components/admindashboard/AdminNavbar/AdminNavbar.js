import React, { useState, useEffect } from 'react'
import "./adminnavbar.scss";

import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function AdminNavbar() {
    const [cookies, setCookie] = useCookies(['user']);
    const [fname, setFname] = useState("");

    useEffect(() => {
        if (cookies.user && cookies.user.name) {
            const gettingFirstName = cookies.user.name.split(" ")[0];
            setFname(gettingFirstName);
        }
    }, [cookies.user]);

    return (
        <div className="admin-navbar">
            <div className="wrapper">
                <h2>Welcome, Admin !</h2>
                {/* <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div> */}
                <div className="items">
                    <Link to={fname !== "" ? "/admin/profile" : "/login"}>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className="avatar"
                            />
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AdminNavbar
