import React, { useState } from "react";
import Answer from "./Answer/Answer";

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const MathQuiz = () => {
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);


  const updatePoints = (userAnswer) => {
    if (parseInt(userAnswer) === a + b) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  };

  return (
    <div>
      <p>Ваши очки: {score}</p>
      <p>{a} + {b} = ?</p>
      
      <Answer updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;
