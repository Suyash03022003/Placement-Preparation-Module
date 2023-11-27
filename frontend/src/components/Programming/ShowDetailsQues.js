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
            .get(`http://localhost:5000/ques/${id}`)
            .then((response) => {
                setQues(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.question}>
                    <div className={styles.content}>
                        <p className={styles.title}>{ques.title}
                        <span className={styles.difficultyLevel} style={ques.difficultyLevel === "Easy" ? {color: "rgb(0 175 155)"} : ques.difficultyLevel === "Medium" ? {color: "rgb(255 184 0)"} : {color: "red"}}>{ques.difficultyLevel}
                        </span>
                        </p>
                        <p className={styles.topic} dangerouslySetInnerHTML={{__html: ques.topic}}></p>
                        <p className={styles.description}dangerouslySetInnerHTML={{__html:ques.description}}></p>
                        <p className={styles.sampleInput}>
                            <p className={styles.sampleHeading}>Sample Input:</p>
                            <p dangerouslySetInnerHTML={{__html:ques.sampleInput}}></p>
                        </p>
                        <p className={styles.sampleOutput}>
                            <p className={styles.sampleHeading}>Sample Output:</p>
                            <p dangerouslySetInnerHTML={{__html: ques.sampleOutput}}></p>
                        </p>
                    </div>
                    <Compiler className={styles.compilerEle} />
                </div>
            )}
        </div>
    )
}

export default ShowDetailsQues