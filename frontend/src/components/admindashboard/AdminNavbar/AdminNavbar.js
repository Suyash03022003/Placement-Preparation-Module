import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AdminNavbar.module.css'

const AdminNavbar = () => {
  return (
    <div className={styles.navbarAdmin}>
        <Link className={styles.adminNavbarLinks} to="/admin"><p>Home</p></Link>
        <Link className={styles.adminNavbarLinks} to="/admin/addContent"><p>Add Content</p></Link>
        <Link className={styles.adminNavbarLinks} to="/admin/viewUsers"><p>View Users</p></Link>
    </div>
  )
}

export default AdminNavbar