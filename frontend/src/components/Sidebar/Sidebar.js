import React, { useState, useEffect } from 'react';
import {
    FaBars
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styles from "./Sidebar.module.css";
import axios from 'axios';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const [topics, setTopics] = useState([]);
    const [topicNames, setTopicNames] = useState([]);

    useEffect(() => {
        try {
            axios.get('http://localhost:5000/topic')
                .then((response) => {
                    setTopics(response.data)
                })
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        setTopicNames(() => {
            return topics.map((topic) => (
                topic.topicName
            ))
        });
    }, [topics]);

    return (
        <div className={styles.sideContainer}>
            <div style={{ width: isOpen ? "250px" : "80px" }} className={styles.sidebar}>
                <div className={styles.topSection}>
                    <h3 style={{ display: isOpen ? "block" : "none" }} className={styles.sidebarLogo}>Syllabus</h3>
                    <div style={{ marginLeft: isOpen ? "60px" : "13px" }} className={styles.bars}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    topicNames.map((item, index) => (
                        <NavLink to={"./content/" + item} key={index} className={styles.link} activeClassName={styles.active}>
                            <div style={{ display: isOpen ? "block" : "none" }} className={styles.linkText}>{item}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};


export default Sidebar;