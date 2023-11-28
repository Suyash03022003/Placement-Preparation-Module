import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AdminFeedback.module.css'

const AdminFeedback = () => {

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/feed')
        .then(response => {
            setFeedbacks(response.data);
        })
        .catch(error => {
          console.error('Error fetching questions:', error);
        });
    }, []);

  return (
    <div className={styles.FeedbackBackground}>
    <h1 className={styles.FeedbackHeading}>Feedbacks from the users</h1>
    <ul className={styles.FeedbackList}>
      {feedbacks.map(userfeedback => (
        <li key={userfeedback._id} className={styles.FeedbackQuestion}>
          <p><strong>Name:</strong> <span className={styles.InterviewAnswer} dangerouslySetInnerHTML={{__html: userfeedback.name}}></span></p>
          <p><strong>Email:</strong> <span className={styles.InterviewAnswer} dangerouslySetInnerHTML={{__html: userfeedback.email}}></span></p>
          <p><strong>Feedback:</strong> <span className={styles.InterviewAnswer} dangerouslySetInnerHTML={{__html: userfeedback.query}}></span></p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default AdminFeedback
