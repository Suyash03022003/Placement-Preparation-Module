import React, { useState } from 'react';
import {
    FaBars
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styles from "./Sidebar.module.css";


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/dsasyllabus",
            name: "Data Structures",

        },
        {
            path: "/string",
            name: "Array",

        },
        {
            path: "/string",
            name: "String",

        },
        {
            path: "/string",
            name: "Linked List",

        },
        {
            path: "/string",
            name: "Stack",

        },
        {
            path: "/string",
            name: "Queue",

        },
        {
            path: "/string",
            name: "Tree",

        },
        {
            path: "/string",
            name: "Graph",

        },
    ]
    return (
        <div className={styles.sideContainer}>
            <div style={{ width: isOpen ? "250px" : "80px" }} className={styles.sidebar}>
                <div className={styles.topSection}>
                    <h3 style={{ display: isOpen ? "block" : "none" }} className={styles.sidebarLogo}>Syllabus</h3>
                    <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className={styles.bars}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={styles.link} activeclassName="active">
                            <div className={styles.icon}>{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className={styles.linkText}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};


export default Sidebar;