import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './HomePage/DiscussionForumHome.js'
import Question from './Question/DiscussionForumQuestion.js'
import AddQuestion from './AddQuestion/DiscussionForumAddQuestion.js'

const Discuss = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/addquestion/:user" element={<AddQuestion />} />
        </Routes>
    )
}

export default Discuss