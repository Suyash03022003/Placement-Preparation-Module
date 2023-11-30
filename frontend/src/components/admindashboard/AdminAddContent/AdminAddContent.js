import React, { useState, useEffect } from 'react';
import styles from './AdminAddContent.module.scss';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AdminAddContent = () => {
  const [formData, setFormData] = useState({});
  const [subTopics, setSubTopics] = useState({ subtopics: [{ subTopicName: '', subTopicDescription: '', ccode: '', cppcode: '', javacode: '' }] });
  const [subTopicsCount, setSubTopicsCount] = useState(1);
  const [type, setType] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [middleId, setMiddleId] = useState('');
  const navigate = useNavigate();

  const handleAddSubTopic = () => {
    setSubTopicsCount(subTopicsCount + 1);
    setSubTopics((prevData) => ({
      ...prevData,
      subtopics: [...prevData.subtopics, { subTopicName: '', subTopicDescription: '', ccode: '', cppcode: '', javacode: '' }],
    }));
  };

  const handleRemoveSubTopic = () => {
    setSubTopicsCount(subTopicsCount - 1);
    setSubTopics((prevData) => ({
      ...prevData,
      subtopics: prevData.subtopics.slice(0, -1),
    }));
  };

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleTypeValueChange = ( listValue ) => {
    setType(listValue + "");
    setFormData((prevData) => ({
      ...prevData,
      type: listValue,
    }))
    setIsOpen(!isOpen)
  }
  
  const extractMiddleId = () => {
      const regex = /\/file\/d\/([^\/]+)\//;
      const match = formData.imageURL.match(regex);
  
      if (match && match[1]) {
        const link = "" + `https://drive.google.com/uc?export=view&id=${match[1]}`;
        return link;
      }
  }
  
  const handleQuillChange = (name) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };

  const handleSubTopicAdd = (event, index) => {
    const { name, value } = event.target;
    setSubTopics((prevData) => {
      const newSubtopics = [...prevData.subtopics];
      newSubtopics[index][name] = value;
      return {
        ...prevData,
        subtopics: newSubtopics,
      };
    });
  }

  const handleAddTopicSubmit = async (e) => {
    e.preventDefault();
    const middleIdURL = extractMiddleId();
    if (formData.topicName !== "" && formData.description !== "") {
      const subtopicsData = subTopics.subtopics.map(subtopic => ({
        subTopicName: subtopic.subTopicName,
        subTopicDescription: subtopic.subTopicDescription,
        ccode: subtopic.ccode,
        cppcode: subtopic.cppcode,
        javacode: subtopic.javacode
      }));

      const bodyJSON = {
        topicName: formData.topicName,
        type: formData.type,
        description: formData.description,
        imageURL: "" + middleIdURL,
        advantages: formData.advantages,
        disadvantages: formData.disadvantages,
        applications: formData.applications,
        subtopics: subtopicsData,
      };

      try {
        await axios.post("http://localhost:5000/topic", bodyJSON)
          .then((res) => {
            alert("Topic added successfully");
            navigate("/admin/addcontent/");
            setFormData({});
            setSubTopics({
              subtopics: [{ subTopicName: '', subTopicDescription: '', ccode: '', cppcode: '', javacode: '' }],
            });

            document.querySelectorAll('input, textarea').forEach(el => {
              el.value = '';
            });

            setType('');
          })
          .catch((err) => {
            console.log(err);
          });

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={styles.mainDivAdminAddContent}>
      <h1>Add Topic:</h1>
      <div
       className={styles.addTopicName}>
        <p className={styles.addTopicHeading}>Topic Name: </p>
        <input
          name='topicName'
          type='text'
          value={formData.topicName}
          onChange={handleValueChange}
        />
      </div>
      <div className={styles.addType}>
        <p className={styles.addTopicHeading}>Type: </p>
        <input
          name='type'
          type='text'
          value={type}
          onClick={() => { setIsOpen(!isOpen) }}
        />
        <ul className={styles.typeOptions} style={isOpen ? {display: "block"} : {display: "none"}}>
          <li className={styles.typeDropDownLi} onClick={() => handleTypeValueChange('Data Structures')}>Data Structures</li>
          <li className={styles.typeDropDownLi} onClick={() => handleTypeValueChange('Algorithms')}>Algorithms</li>
        </ul>
      </div>
      <div className={styles.addDescription}>
        <p className={styles.addTopicHeading}>Description:</p>
        <ReactQuill
          className={styles.reactQuill}
          theme="snow"
          value={formData.description}
          onChange={handleQuillChange('description')}
          style={{ height: "200px", marginBottom: "40px" }}
        />
      </div>
      <div className={styles.addImageURL}>
        <p className={styles.addTopicHeading} style={{ marginBottom: "10px" }}>Image URL: </p>(Upload your image on <a href="https://drive.google.com/drive/u/0/folders/1aG2YkVETy-5qhP_X6XrkVepvRJTe6Bga" target='_blank'>https://drive.google.com/drive/u/0/folders/1aG2YkVETy-5qhP_X6XrkVepvRJTe6Bga</a> and provide it's url)
        <input
          name='imageURL'
          type='text'
          value={formData.imageURL}
          onChange={handleValueChange}
        />
      </div>
      <div className={styles.addadvantages}>
        <h2>Advantages:</h2>
        <ReactQuill
          value={formData.advantages}
          onChange={handleQuillChange('advantages')}
          className={styles.reactQuill}
          theme="snow"
          style={{ height: "200px", marginBottom: "40px" }}
        />
      </div>
      <div className={styles.adddisadvantages}>
        <h2>Disadvantages:</h2>
        <ReactQuill
          value={formData.disadvantages}
          onChange={handleQuillChange('disadvantages')}
          className={styles.reactQuill}
          theme="snow"
          style={{ height: "200px", marginBottom: "40px" }}
        />
      </div>
      <div className={styles.addapplication}>
        <h2>Applications:</h2>
        <ReactQuill
          value={formData.applications}
          onChange={handleQuillChange('applications')}
          className={styles.reactQuill}
          theme="snow"
          style={{ height: "200px", marginBottom: "40px" }}
        />
      </div>
      <h2>Add Sub Topics: </h2>
      {subTopics.subtopics.map((subtopic, index) => (
        <div className={styles.addSubTopics} key={index}>
          <button onClick={handleRemoveSubTopic}>-</button>
          <p className={styles.addTopicHeading}>Name:
            <input
              type='text'
              value={formData.subTopicName}
              name='subTopicName'
              onChange={(e) => handleSubTopicAdd(e, index)}
            />
          </p>
          <p className={styles.addTopicHeading}>Desciption:
            <textarea
              type='text'
              value={formData.subTopicDescription}
              name='subTopicDescription'
              onChange={(e) => handleSubTopicAdd(e, index)}
            ></textarea>
          </p>
          <h3>Available Program Links: </h3>
          <p className={styles.addTopicHeading}>C:
            <textarea
              type='text'
              name='ccode'
              value={formData.ccode}
              onChange={(e) => handleSubTopicAdd(e, index)}
            ></textarea>
          </p>
          <p className={styles.addTopicHeading}>C++:
            <textarea
              type='text'
              name='cppcode'
              value={formData.cppcode}
              onChange={(e) => handleSubTopicAdd(e, index)}
            ></textarea>
          </p>
          <p className={styles.addTopicHeading}>Java:
            <textarea
              type='text'
              name='javacode'
              value={formData.javacode}
              onChange={(e) => handleSubTopicAdd(e, index)}
            ></textarea>
          </p>
        </div>
      ))}
      <div onClick={handleAddSubTopic}>
        <button>+</button>
      </div>
      <div className={styles.addTopicButton}>
        <button onClick={handleAddTopicSubmit}>Add Topic</button>
      </div>
    </div>
  )
}

export default AdminAddContent