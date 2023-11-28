import React, { useState, useEffect } from 'react';
import "./QuizQuestion.css";

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const topic = queryParams.get('topic');
        const difficultyLevel = queryParams.get('difficultyLevel');

        const url = `http://localhost:5000/mcquiz?topic=${topic}&difficultyLevel=${difficultyLevel}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setQuestions(data);
        initializeSelectedAnswers(data);
      } catch (error) {
        console.error('Error fetching questions:', error.message);
      }
    };

    fetchQuestions();
  }, []);

  const initializeSelectedAnswers = (data) => {
    const initialAnswers = {};
    data.forEach((question) => {
      initialAnswers[question._id] = ''; // Assuming each question has a unique ID
    });
    setSelectedAnswers(initialAnswers);
  };

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option,
    });
  };

  return (
    <div className='MCQQuesBackground'>
      <h1 className='quizQuestionsHeading'>Quiz Questions</h1>
      <form className='quizQuetionForm'>
        {questions.map((question, index) => (
          <div key={question._id} className='seperateMCQQues'>
            <h3 className='questionSection'>Question {index + 1}: {question.question}</h3>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex} className='option'>
                  <label>
                    <input
                      type="radio"
                      name={`question${question._id}`}
                      value={option}
                      checked={selectedAnswers[question._id] === option}
                      onChange={() => handleOptionSelect(question._id, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button className='MCQSubmit'>Submit</button>
      </form>
    </div>
  );
};

export default QuizComponent;
