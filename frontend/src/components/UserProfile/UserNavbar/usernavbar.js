import React, { useState, useEffect } from 'react'
import "./usernavbar.scss";
import { useCookies } from 'react-cookie';

const Usernavbar = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [ fname, setFname ] = useState();

    useEffect(() => {
        if (cookies.user && cookies.user.name) {
            const gettingFirstName = cookies.user.name.split(" ")[0];
            setFname(gettingFirstName);
        }
    }, [cookies.user]);

    return (
        <div className="user-navbar">
            <div className="wrapper">
                <h2>Welcome, {fname}!</h2>
            </div>
        </div>
    )
}

export default Usernavbar;