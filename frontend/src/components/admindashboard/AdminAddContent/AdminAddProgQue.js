import React, { useState, useEffect } from 'react';
import styles from './AdminAddProgQue.module.css';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import axios from 'axios';

const AdminAddProgQue = () => {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [difficultyLevel, setDifficultylevel] = useState('');
  const [sampleInput, setSampleinput] = useState('');
  const [sampleOutput, setSampleoutput] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/ques', { title: title, topic: topic, difficultyLevel: difficultyLevel, sampleInput: sampleInput, sampleOutput: sampleOutput, description: description });
      // Reset fields after successful save if needed
      setTitle('');
      setTopic('');
      setDifficultylevel('');
      setSampleinput('');
      setSampleoutput('');
      setDescription('');
      alert('Interview question and answer saved successfully!');
    } catch (error) {
      alert('Failed to save interview question and answer');
      // Handle error
    }
  };

  return (
    <div className={styles.mainDivAdminAddInterview}>
      <div className={styles.addInterviewQues}>
        <h3 className={styles.addTopicHeading}>Title:</h3>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          style={{ height: '100px', marginBottom: '40px' }}
          value={title}
          onChange={setTitle}
        />
      </div>

      <div className={styles.addInterviewAns}>
        <h3 className={styles.addTopicHeading}>Topic:</h3>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          style={{ height: '200px', marginBottom: '40px' }}
          value={topic}
          onChange={setTopic}
        />
      </div>

      <div className={styles.addInterviewAns}>
        <h3 className={styles.addTopicHeading}>Difficulty Level:</h3>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          style={{ height: '200px', marginBottom: '40px' }}
          value={difficultyLevel}
          onChange={setDifficultylevel}
        />
      </div>

      <div className={styles.addInterviewAns}>
        <h3 className={styles.addTopicHeading}>Sample Input:</h3>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          style={{ height: '200px', marginBottom: '40px' }}
          value={sampleInput}
          onChange={setSampleinput}
        />
      </div>

      <div className={styles.addInterviewAns}>
        <h3 className={styles.addTopicHeading}>Sample Output:</h3>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          style={{ height: '200px', marginBottom: '40px' }}
          value={sampleOutput}
          onChange={setSampleoutput}
        />
      </div>

      <div className={styles.addInterviewAns}>
        <h3 className={styles.addTopicHeading}>Desciption:</h3>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          style={{ height: '200px', marginBottom: '40px' }}
          value={description}
          onChange={setDescription}
        />
      </div>

      <button onClick={handleSave} className={styles.addInterviewButton}>Save</button>
    </div>
  );
};

export default AdminAddProgQue;
