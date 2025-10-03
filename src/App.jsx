import { useState } from "react";
import Question from "./Question";
import { questionsArray } from "./assets/info";
import "./App.css";

function App() {
  const [questions, setQuestion] = useState(questionsArray);
  const [expandedId, setExpandedId] = useState(null);

  return (
    <>
      <div>
        <h1 className="title">Questions</h1>
        <ul className="list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                {...question}
                isExpanded={expandedId === question.id}
                onExpanded={(open) => setExpandedId(open ? question.id : null)}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
