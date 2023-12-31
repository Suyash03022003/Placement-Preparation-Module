import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar.js'
import styles from './LearnDSA.module.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import SeperatePage from './SeperatePage.js'
import LearnDSA_Home from './LearnDSA_Home.js'

const LearnDSA = () => {
  const [ topics, setTopics ] = useState();

  return (
    <div className={styles.learnDSAMainDiv}>
      <Sidebar />
      <Routes>
        <Route path="/" index element={<LearnDSA_Home />} />
        <Route path="/content/:topic" element={<SeperatePage />} />
      </Routes>
    </div>
  )
}

export default LearnDSA