import React, { useState, useEffect } from 'react';
import styles from './AdminAddInterviewQue.module.css';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import axios from 'axios';

const AdminAddInterviewQue = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/interview', { question: question, answer: answer });
      setQuestion('');
      setAnswer('');
      alert('Interview question and answer saved successfully!');
    } catch (error) {
      alert('Failed to save interview question and answer');
    }
  };

  return (
    <div className={styles.mainDivAdminAddInterview}>
      <div className={styles.addInterviewQues}>
        <h3 className={styles.addTopicHeading}>Question:</h3>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          style={{ height: '100px', marginBottom: '40px' }}
          value={question}
          onChange={setQuestion}
        />
      </div>

      <div className={styles.addInterviewAns}>
        <h3 className={styles.addTopicHeading}>Answer:</h3>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          style={{ height: '200px', marginBottom: '40px' }}
          value={answer}
          onChange={setAnswer}
        />
      </div>

      <button onClick={handleSave} className={styles.addInterviewButton}>Save</button>
    </div>
  );
};

export default AdminAddInterviewQue;
