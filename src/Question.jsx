import React, { useState } from "react";
const Question = (props) => {
  const { question, answer, isExpanded, onExpanded } = props;
  return (
    <li className={`list-element ${isExpanded ? "expanded" : ""}`}>
      {isExpanded === false ? (
        <div className="list-element-box">
          <p className="question">{question}</p>
          <button className="btn" onClick={() => onExpanded(true)}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      ) : (
        <>
          <div className="list-element-box">
            <p className="question">{question}</p>
            <button className="btn" onClick={() => onExpanded(false)}>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
          </div>
          <p className="answer">{answer}</p>
        </>
      )}
    </li>
  );
};
export default Question;
