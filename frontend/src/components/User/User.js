import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom"

import FrontPage from '../FrontPage/FrontPage.js';
import Programming from '../Programming/Programming.js';
import DsaSyllabus from '../DsaSyllabus/DsaSyllabus.js';
import CheatSheet from '../CheatSheet/Sheet.js';
import ShowDetailsQues from '../Programming/ShowDetailsQues.js';
import Register from '../Register/Register.js';
import Array from '../Array.js';
import String from '../String.js';
import Discuss from '../Discuss/Discuss.js'
import Profile from '../UserProfile/Profile.js';
import LearnDSA from '../LearnDSA/LearnDSA.js';
import InterviewQues from '../InterviewQues/InterviewQues.js';
import Quizzes from '../Quizzes/Quizzes.js';
import Navbar from '../NavBar/Navbar.js';
import Footer from '../Footer/Footer.js';

const User = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/dsasyllabus" element={<DsaSyllabus />} />
                <Route path="/array" element={<Array />} />
                <Route path="/string" element={<String />} />
                <Route path="/cheatsheet" element={<CheatSheet />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/discuss/*" element={<Discuss />} />
                <Route path="/learnDSA" element={<LearnDSA />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/interviewques" element={<InterviewQues />} />
                <Route path="/register" element={<Register />} />
                <Route path='/details/:id' element={<ShowDetailsQues />} />
            </Routes>
            <Footer />
        </>
    )
}

export default User