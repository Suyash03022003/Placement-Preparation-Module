import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const handleLogout = () => {
        try {
            removeCookie("user");
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.error("Error removing cookie:", error);
        }
    }
    
    return (
        <div>
            <h2>Profile</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UserLogout