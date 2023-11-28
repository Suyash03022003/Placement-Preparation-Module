import React from 'react';
import "./userwidget.scss";
import QuizIcon from '@mui/icons-material/Quiz';
import TerminalIcon from '@mui/icons-material/Terminal';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOffIcon from '@mui/icons-material/PersonOff';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';

const userwidget = ({ type }) => {
  let data;

  const amount = 70;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "TOTAL QUIZZES SOLVED",
        amount: "5/17",
        link: "View details",
        icon: (
          <QuizIcon
            className="user-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "active-user":
      data = {
        title: "PROGRAMMING QUESTIONS ATTEMPTED",
        amount: 8,
        link: "View details",
        icon: (
          <TerminalIcon
            className="user-icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;

    case "unsubcribed":
      data = {
        title: "UNATTEMPTED QUESTIONS",
        amount: 10,
        link: "View details",
        icon: (
          <ContentPasteOffIcon
            className="user-icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "useractive":
      data = {
        title: "SITE VIEWS",
        amount: 70,
        link: "View details",
        icon: (
          <ReviewsIcon
            className="user-icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="user-widget">
      <div className="user-left">
        <span className="user-title">{data.title}</span>
        <span className="counter">{data.amount} </span>
        <span className="user-link">{data.link}</span>
      </div>
      <div className="user-right">
        <div className="percentage positive">

          { }
        </div>

        {data.icon}
      </div>

    </div>
  );
};

export default userwidget;
