import React from 'react';
import { Link } from "react-router-dom";
import "./Quizzes.css";

function Quizzes() {
    return (
        <div>

            <div class="quiz-main-div">
                <div class="ag-courses_box">
                    <div class="ag-courses_item">
                        <Link to={{
                            pathname: '/user/QuizQuestion',
                            search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                        }} class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Array
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty:
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to={{
                            pathname: '/user/QuizQuestion',
                            search: '?topic=Linked List&difficultyLevel=Medium' // Pass the selected filters as query parameters
                        }} class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Linked List
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty:
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                String
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty:
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Dynamic Programming
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty:
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Array-List
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty:
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Sorting Algorithm
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty:
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Stack and Queue
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Recursion
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Hash Maps
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Stack and Queue
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Stack and Queue
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Stack and Queue
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Stack and Queue
                            </div>

                            <div class="ag-courses-item_date-box">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    Easy Medium Hard
                                </span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Quizzes;
