import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './SeperatePage.module.css'

const SeperatePage = () => {
    const { topic: topicName } = useParams();
    const [topicDetails, setTopicDetails] = useState({ imageURL: '' });
    const [images, setImages] = useState();

    useEffect(() => {
        const fetchTopicDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/topic/${topicName}`);
                setTopicDetails(response.data.mainTopic);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTopicDetails();
    }, [topicName]);

    useEffect(() => {
        setImages(topicDetails.imageURL);
    }, [topicDetails])

    return (
        <div className={styles.mainSeperateTopicsDiv}>
            <h1>{topicDetails?.topicName}</h1>
            <div dangerouslySetInnerHTML={{ __html: topicDetails?.description }}></div>
            {topicDetails?.imageURL && (
                <img src={topicDetails.imageURL} alt={topicDetails.topicName} className={styles.topicImage} />
            )}
        </div>
    );
};

export default SeperatePage;
