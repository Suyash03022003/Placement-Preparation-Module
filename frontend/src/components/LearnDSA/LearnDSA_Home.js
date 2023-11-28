import React from 'react'
import styles from './LearnDSA_Home.module.css'
import MainImage from '../../assets/1.png'

const LearnDSA_Home = () => {
    return (
        <div className={styles.LearnDSA_HomeMain}>
            <h1>Data Structures and Algorithm</h1>
            <p>DSA is one of the most important skills that every computer science student must-have. It is often seen that people with good knowledge of these technologies are better programmers than others and thus, crack the interviews of almost every tech giant.</p>
            <div className={styles.mainOuterDiv}>
                <div className={styles.mainImageDiv}>
                    <img src={MainImage} className={styles.mainImage} />
                </div>
            </div>
        </div>
    )
}

export default LearnDSA_Home