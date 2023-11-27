import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './interviewQues.module.css'

const InterviewQues = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/interview')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  return (
    <div className={styles.InterviewQuesBackground}>
    <h1 className={styles.InterviewQuesHeading}>Interview Questions</h1>
    <ul className={styles.InterviewQuesList}>
      {questions.map(interview => (
        <li key={interview._id} className={styles.SepInterviewQuestion}>
          <h3 className={styles.InterviewQuesQuestion}>{interview.question}</h3>
          <p><strong>Answer:</strong> {interview.answer}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default InterviewQues