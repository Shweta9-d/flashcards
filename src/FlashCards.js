import React, { useState } from "react";
import { questions } from "./utils/data";

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  //console.log(questions);
  function handleClick(id) {
    setSelectedId(id);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
