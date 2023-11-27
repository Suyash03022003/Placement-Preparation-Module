import React, { useState, useEffect } from 'react';
import styles from './Question.module.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AccountLogo from '../../../assets/account.png';
import LikeOption from '../../../assets/like.png';
import UpArrow from '../../../assets/uparrow.png';
import DownArrow from '../../../assets/downarrow.png';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

const DiscussionForumQuestion = () => {
  const { id } = useParams();
    const [ques, setQues] = useState({});
    const [users, setUsers] = useState({});
    const [userMap, setUserMap] = useState({});
    const [beforeviews, setBeforeviews] = useState(0);
    const [views, setViews] = useState(0);
    const [loading, setLoading] = useState(true);
    const [answer, setAnswer] = useState("")
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        setLoading(true);
        if (id) {
            axios
                .get(`http://localhost:5000/dfques/${id}`)
                .then((response) => {
                    setQues(response.data);
                    setLoading(false);
                    setBeforeviews(response.data.views);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            axios
                .get('http://localhost:5000/answer')
                .then((response) => {
                    setAnswers(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);

    useEffect(() => {
        const userRequests = [
            axios.get(`http://localhost:5000/user/${ques.user}`),
            ...answers.map((answer) => axios.get(`http://localhost:5000/user/${answer.user}`))
        ];
        Promise.all(userRequests)
            .then((responses) => {
                const map = {};
                map[ques.user] = responses[0].data.name;
                answers.forEach((answer, index) => {
                    map[answer.user] = responses[index + 1].data.name;
                });
                setUserMap(map);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, ques.user, answers]);


    const incrementViews = () => {
        const updatedViews = beforeviews + 1;
        setViews(updatedViews);
        const object = {
            title: ques.title,
            tags: ques.tags,
            views: updatedViews
        };

        axios.put(`http://localhost:5000/dfques/${id}`, object)
            .then((response) => {
                // console.log(beforeviews + " " + views)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (id && ques._id) {
            incrementViews();
        }
    }, [id, ques._id]);

    const handleQuill = (value) => {
        setAnswer(value)
    }

    useEffect(() => {
        if (ques.user) {
            axios
                .get(`http://localhost:5000/user/${ques.user}`)
                .then((response) => {
                    setUsers(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [ques.user]);

    const calcDate = (created_on) => {
        const parsedDateTime = new Date(created_on);
        const formattedProvidedDateTime = parsedDateTime.toLocaleString();
        return formattedProvidedDateTime;
    }

    const incrementLikes = () => {
        const updatedLikes = ques.likes + 1;
        const object = {
            title: ques.title,
            tags: ques.tags,
            likes: updatedLikes
        };

        axios.put(`http://localhost:5000/dfques/${id}`, object)
            .then((response) => {
                setQues({ ...ques, likes: updatedLikes });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Function to increment upvotes
    const incrementVotes = (answerId, question, answer, user, upvotes) => {
        const updatedUpvotes = upvotes + 1;
        const object = {
            question: question,
            answer: answer,
            user: user,
            upvotes: updatedUpvotes
        };

        axios.put(`http://localhost:5000/answer/${answerId}`, object)
            .then((response) => {
                setAnswers((prevAnswers) =>
                    prevAnswers.map((answer) =>
                        answer._id === answerId ? { ...answer, upvotes: updatedUpvotes } : answer
                    )
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Function to decrement upvotes
    const decrementVotes = (answerId, question, answer, user, downvotes) => {
        const updatedDownvotes = downvotes + 1;
        const object = {
            question: question,
            answer: answer,
            user: user,
            downvotes: updatedDownvotes
        };

        axios.put(`http://localhost:5000/answer/${answerId}`, object)
            .then((response) => {
                setAnswers((prevAnswers) =>
                    prevAnswers.map((answer) =>
                        answer._id === answerId ? { ...answer, downvotes: updatedDownvotes } : answer
                    )
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const postAnswer = () => {
        const answerData = {
            question: ques._id,
            answer: answer,
            user: ques.user
        };

        axios.post('http://localhost:5000/answer', answerData)
            .then((response) => {
                console.log('Answer posted:', response.data);

                const newAnswers = [...answers];
                newAnswers.push(response.data);

                setAnswers(newAnswers);
            })
            .catch((error) => {
                console.error('Error posting answer:', error);
            });

        setAnswer("");
    }

    return (
        <div className={styles.main}>
            {/* <div className={styles.filter}>
                <Sidebar />
            </div> */}
            {loading ? (
                <p style={{ textAlign: 'center' }}>Loading...</p>
            ) : (
                <div className={styles.centerDiv}>
                    <div className={styles.info}>
                        <h4>{ques.title}</h4>
                        <Link to={`/addquestion/${ques.user}`}><button>Ask Question</button></Link>
                    </div>
                    <div className={styles.quesInfo}>
                        {calcDate(ques.created_on)}{' '}
                        <span className={styles.bold}>Views:</span> {views}{' '}
                        <span className={styles.bold}>Likes:</span> {ques.likes}
                    </div>
                    <div className={styles.questionUploader}>
                        <div className={styles.options}>
                            <div className={styles.quesBody}>
                                <p className={styles.questionDesc} dangerouslySetInnerHTML={{ __html: ques.body }}>
                                </p>
                            </div>
                            <img src={LikeOption} alt="likeIcon" onClick={incrementLikes} />
                        </div>
                        <div className={styles.userDetails}>
                            <div className={styles.timeStamp}>
                                <p>{calcDate(ques.created_on)}</p>
                            </div>
                            <div className={styles.userProfile}>
                                <img src={AccountLogo} alt="accountIcon" />
                                <Link className={styles.linkProfile} to="/profile">
                                    <p className={styles.userName}>{users.name}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.answers}>
                        <h3 style={{ fontSize: "22px", fontWeight: "400" }} className={styles.headAnswer}>{answers.filter(answer => answer.question === ques._id).length} Answer(s):</h3>
                        {answers
                            .filter(answer => answer.question === ques._id)
                            .map((answer) => (
                                <div key={answer._id} className={styles.individualAnswers}>
                                    <div className={styles.options}>
                                        <div className={styles.optionsMenuVotes}>
                                            <img src={UpArrow} alt="upvote icon" onClick={() => incrementVotes(answer._id, answer.question, answer.answer, answer.user, answer.upvotes)} />
                                            <p>{answer.upvotes - answer.downvotes}</p>
                                            <img src={DownArrow} alt="downvote icon" onClick={() => decrementVotes(answer._id, answer.question, answer.answer, answer.user, answer.downvotes)} />

                                        </div>
                                    </div>
                                    <div className={styles.questionUploader}>
                                        <div dangerouslySetInnerHTML={{ __html: answer.answer }} />
                                        <div className={styles.userDetails}>
                                            <div className={styles.timeStamp}>
                                                <p>Asked {calcDate(answer.created_at)}</p>
                                            </div>
                                            <Link className={styles.linkProfile} to="/profile">
                                                <div className={styles.userProfile}>
                                                    <img src={AccountLogo} alt="accountIcon" />
                                                    <p className={styles.userName}>{userMap[answer.user]}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className={styles.postAnswers}>
                        <h3 style={{ fontSize: "22px", margin: "10px 0", fontWeight: "400" }}>Your Answer</h3>
                        <ReactQuill
                            value={answer}
                            onChange={handleQuill}
                            className={styles.reactQuill}
                            theme="snow"
                        />
                        <button
                            className={styles.postAnswerButton}
                            onClick={postAnswer}
                        >
                            Post Answers
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DiscussionForumQuestion;
