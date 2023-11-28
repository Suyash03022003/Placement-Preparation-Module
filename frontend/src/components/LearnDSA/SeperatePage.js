import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './SeperatePage.module.css';

const SeperatePage = () => {
    const { topic: topicName } = useParams();
    const [topicDetails, setTopicDetails] = useState({ imageURL: '' });
    const [subTopicDetails, setSubTopicDetails] = useState([]);
    const [subTopicContents, setSubTopicContents] = useState([]);

    useEffect(() => {
        const fetchTopicDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/topic/${topicName}`);
                setTopicDetails(response.data.mainTopic);
                setSubTopicDetails(response.data.mainTopic.subTopics);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTopicDetails();
    }, [topicName]);

    useEffect(() => {
        const fetchSubTopicDetails = async (id) => {
            try {
                const response = await axios.get(`http://localhost:5000/subtopic/${id}`);
                setSubTopicContents((prevData) => [
                    ...prevData,
                    response.data
                ]);                
            } catch (error) {
                console.error(error);
            }
        }

        subTopicDetails.map((subtopicid) => (
            fetchSubTopicDetails(subtopicid),
            console.log(subTopicContents)
        ))
    }, [subTopicDetails]);

    const fetchSubTopicDetails = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/subtopic/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.mainSeperateTopicsDiv}>
            <h1>{topicDetails?.topicName}</h1>
            <div className={styles.descriptionDiv} dangerouslySetInnerHTML={{ __html: topicDetails?.description }}></div>
            {topicDetails?.imageURL && (
                <div className={styles.mainOuterDiv}>
                    <div className={styles.mainImageDiv}>
                        <img src={topicDetails.imageURL} alt={topicDetails.topicName} className={styles.topicImage} />
                    </div>
                </div>
            )}
            {topicDetails?.advantages && (
                <div className={styles.mainOuterDivAdvantages}>
                    <h3>Advantages:</h3>
                    <div className={styles.advantagesInnerDiv} dangerouslySetInnerHTML={{ __html: topicDetails.advantages }}></div>
                </div>
            )}
            {topicDetails?.disadvantages && (
                <div className={styles.mainOuterDivAdvantages}>
                    <h3>Disadvantages:</h3>
                    <div className={styles.advantagesInnerDiv} dangerouslySetInnerHTML={{ __html: topicDetails.disadvantages }}></div>
                </div>
            )}
            {topicDetails?.applications && (
                <div className={styles.mainOuterDivAdvantages}>
                    <h3>Applications:</h3>
                    <div className={styles.advantagesInnerDiv} dangerouslySetInnerHTML={{ __html: topicDetails.applications }}></div>
                </div>
            )}
            {subTopicDetails.length > 0 && (
                subTopicContents.map((subTopic, index) => {
                    <p>{subTopic.subTopicName}</p>
                })
            )}
        </div>
    );
};

export default SeperatePage;
