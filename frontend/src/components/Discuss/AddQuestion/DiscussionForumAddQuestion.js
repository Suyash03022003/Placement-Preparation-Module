import React, { useState } from 'react'
import styles from './discussionForumAddQuestion.module.css'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { TagsInput } from "react-tag-input-component"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const DiscussionForumAddQuestion = () => {
    const { user } = useParams();

    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [tags, setTags] = React.useState([]);

    const navigate = useNavigate();

    const handleQuill = (value) => {
        setBody(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "" && body !== "") {
            const bodyJSON = {
                title: title,
                body: body,
                tags: tags,
                user: user,
            };
            await axios.post("http://localhost:5000/dfques", bodyJSON)
                .then((res) => {
                    alert("Question added successfully");
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.centerDiv}>
                <h4 className={styles.addQuesh4}>Ask a Question</h4>
                <div className={styles.mainForm}>
                    <div className={styles.quesTitleMainForm}>
                        <p className={styles.headAskQuestion}>Title:</p>
                        <small>
                            Be specific and imagine you're asking a question to another
                            person
                        </small>
                        <input value={title} onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="e.g What is Insomnia?"

                        />
                    </div>
                    <div className={styles.quesBodyMainForm}>
                        <p className={styles.headAskQuestion}>Body:</p>
                        <small>
                            Include all the information someone would need to answer your question
                        </small>
                        <ReactQuill value={body} onChange={handleQuill}
                            className="react-quill"
                            theme="snow"
                            style={{ height: "200px", marginBottom: "40px" }}
                        />
                    </div>
                    <div className={styles.quesTagsMainForm}>
                        <p className={styles.headAskQuestion}>Tags:</p>
                        <small>
                            Add up to 5 tags to describe what your question is about
                        </small>
                        <TagsInput
                            value={tags}
                            onChange={setTags}
                            name="tags"
                            placeHolder="Press Enter to add new tag"

                        />
                    </div>
                    <button type="submit" onClick={handleSubmit} className={styles.addQuestionButton}>Add Your Question</button>
                </div>
            </div>
        </div>
    )
}

export default DiscussionForumAddQuestion