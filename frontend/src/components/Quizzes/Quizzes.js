import React from 'react';
import { Link } from "react-router-dom";
import "./Quizzes.css";

function Quizzes() {
    return (
        <div>
            <div class="quiz-main-div">
                <div class="quiz_main_box">
                    <div class="quiz_item">
                        <Link to={{
                            pathname: '/user/QuizQuestion',
                            search: '?topic=Array&difficultyLevel=Easy&difficultyLevel=Hard&difficultyLevel=Medium'
                        }} class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Array
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span class="quiz_item_difficultyLevel_easy">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to={{
                            pathname: '/user/QuizQuestion',
                            search: '?topic=Linked List&difficultyLevel=Easy&difficultyLevel=Medium&difficultyLevel=Hard' // Pass the selected filters as query parameters
                        }} class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Linked List
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span class="quiz_item_difficultyLevel_easy">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Linked List&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Linked List&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Linked List&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to={{
                            pathname: '/user/QuizQuestion',
                            search: '?topic=String&difficultyLevel=Easy&difficultyLevel=Hard&difficultyLevel=Medium'
                        }} class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                String
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span class="quiz_item_difficultyLevel_easy">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=String&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=String&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=String&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to={{
                            pathname: '/user/QuizQuestion',
                            search: '?topic=Array&difficultyLevel=Easy&difficultyLevel=Hard&difficultyLevel=Medium'
                        }} class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Dynamic Programming
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span class="quiz_item_difficultyLevel_easy">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to='/QuizQuestion' class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Array-List
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span class="quiz_item_difficultyLevel_easy">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to='/QuizQuestion' class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Sorting Algorithm
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span class="quiz_item_difficultyLevel_easy">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to='/QuizQuestion' class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Stack and Queue
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty :&emsp;
                                <span class="quiz_item_difficultyLevel_easy">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to='/QuizQuestion' class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Recursion
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="quiz_item_title">
                                Hash Maps
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="quiz_item_title">
                                Stack and Queue
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="quiz_item_title">
                                Stack and Queue
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="quiz_item_title">
                                Stack and Queue
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="ag-courses_item">
                        <Link to='/QuizQuestion' class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="quiz_item_title">
                                Stack and Queue
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty :&emsp;
                                <span class="ag-courses-item_date">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}>
                                        Easy
                                    </Link>
                                </span>

                                <span class="quiz_item_difficultyLevel_medium">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}>
                                        Medium
                                    </Link>
                                </span>
                                <span class="quiz_item_difficultyLevel_hard">
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} >
                                        Hard
                                    </Link>
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
