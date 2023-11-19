import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
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
    <>
      <div>Profile</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile