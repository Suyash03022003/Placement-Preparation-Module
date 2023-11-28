import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Quizzes.css";
import { useCookies } from 'react-cookie';

function Quizzes() {
    const [cookies, setCookie] = useCookies(['user']);
  const [fname, setFname] = useState("");

  useEffect(() => {
    if (cookies.user && cookies.user.name) {
        const gettingFirstName = cookies.user.name.split(" ")[0];
        setFname(gettingFirstName);
    }
}, [cookies.user]);
    return (
        <div>
            <div class="quiz-main-div">
                <div class="quiz_main_box">
                    <div class="quiz_item">
                        <Link to={fname !== "" ? {
                            pathname: '/user/QuizQuestion',
                            search: '?topic=Array&difficultyLevel=Easy&difficultyLevel=Hard&difficultyLevel=Medium'
                        } : "/login"} class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Array
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span>
                                    <Link to={fname !== "" ?{
                                            pathname: '/user/QuizQuestion',
                                            search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                        } : "/login"}
                                        className="quiz_item_difficultyLevel_easy"
                                    >
                                        Easy
                                    </Link>
                                </span>

                                <span>
                                    <Link 
                                    to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }: "/login"}
                                    className="quiz_item_difficultyLevel_medium"
                                    >
                                        Medium
                                    </Link>
                                </span>
                                <span>
                                    <Link 
                                    to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }: "/login"}
                                    className="quiz_item_difficultyLevel_hard"
                                    >
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
                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Linked List&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_easy">
                                        
                                        Easy
                                    </Link>
                                </span>

                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Linked List&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_medium">
                                        Medium
                                    </Link>
                                </span>
                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Linked List&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_hard">
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to={fname !== "" ?{
                            pathname: '/user/QuizQuestion',
                            search: '?topic=String&difficultyLevel=Easy&difficultyLevel=Hard&difficultyLevel=Medium'
                        }: "/login"} class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                String
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=String&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_easy">
                                        Easy
                                    </Link>
                                </span>

                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=String&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_medium">
                                        Medium
                                    </Link>
                                </span>
                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=String&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_hard">
                                        Hard
                                    </Link>
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div class="quiz_item">
                        <Link to={fname !== "" ?{
                            pathname: '/user/QuizQuestion',
                            search: '?topic=Array&difficultyLevel=Easy&difficultyLevel=Hard&difficultyLevel=Medium'
                        }: "/login"} class="quiz_item_link">
                            <div class="quiz_item_bg"></div>

                            <div class="quiz_item_title">
                                Dynamic Programming
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty:
                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_easy">
                                        Easy
                                    </Link>
                                </span>

                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_medium">
                                        Medium
                                    </Link>
                                </span>
                                <span >
                                    <Link to={fname !== "" ?{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }: "/login"} class="quiz_item_difficultyLevel_hard">
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
                                <span >
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}class="quiz_item_difficultyLevel_easy">
                                        Easy
                                    </Link>
                                </span>

                                <span>
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_medium">
                                        Medium
                                    </Link>
                                </span>
                                <span >
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_hard">
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
                                <span >
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_easy">
                                        Easy
                                    </Link>
                                </span>

                                <span >
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_medium">
                                        Medium
                                    </Link>
                                </span>
                                <span >
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_hard">
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
                                <span>
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_easy">
                                        Easy
                                    </Link>
                                </span>

                                <span>
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}class="quiz_item_difficultyLevel_medium">
                                        Medium
                                    </Link>
                                </span>
                                <span >
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_hard">
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
                                <span>
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }}  class="quiz_item_difficultyLevel_easy">
                                        Easy
                                    </Link>
                                </span>

                                <span>
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_medium">
                                        Medium
                                    </Link>
                                </span>
                                <span>
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_hard" >
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
                                Hash Maps
                            </div>

                            <div class="quiz_item_difficultyLevel">
                                Difficulty :&emsp;
                                <span>
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Easy' // Pass the selected filters as query parameters
                                    }} class="quiz_item_difficultyLevel_easy">
                                        Easy
                                    </Link>
                                </span>

                                <span >
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Medium' // Pass the selected filters as query parameters
                                    }}class="quiz_item_difficultyLevel_medium">
                                        Medium
                                    </Link>
                                </span>
                                <span>
                                    <Link to={{
                                        pathname: '/user/QuizQuestion',
                                        search: '?topic=Array&difficultyLevel=Hard' // Pass the selected filters as query parameters
                                    }}  class="quiz_item_difficultyLevel_hard">
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
