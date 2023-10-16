import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Compiler from '../Compiler/Compiler'
import styles from './showDetails.module.css'

const ShowDetailsQues = () => {
    const [ques, setQues] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:8080/ques/${id}`)
            .then((response) => {
                setQues(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.question}>
                    <div className={styles.content}>
                        <p className={styles.title}>{ques.title}<span className={styles.difficultyLevel}>({ques.difficultyLevel})</span></p>
                        <p className={styles.topic}>{ques.topic}</p>
                        <p className={styles.description}>{ques.description}</p>
                        <p className={styles.sampleInput}>
                            <p className={styles.sampleHeading}>Sample Input:</p>
                            <p>{ques.sampleInput}</p>
                        </p>
                        <p className={styles.sampleOutput}>
                            <p className={styles.sampleHeading}>Sample Output:</p>
                            <p>{ques.sampleOutput}</p>
                        </p>
                    </div>
                    <Compiler className={styles.compilerEle} />
                </div>
            )}
        </div>
    )
}

export default ShowDetailsQues