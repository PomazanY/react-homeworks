import React, { useState } from "react";
import Answer from "./Answer/Answer";

const generateRandomNumber = () => Math.floor(Math.random() * 10);

const MathQuiz = () => {
  const [score, setScore] = useState(0);

  const updatePoints = (newScore) =>{
    setScore(prevScore => prevScore + newScore)
  };

  const a = generateRandomNumber();
  const b = generateRandomNumber();

  return (
    <div>
      <p>Ваши очки: {score}</p>
      <p>{a} + {b} = ?</p>
      
      <Answer updatePoints={updatePoints} a={a} b={b} />
    </div>
  );
};

export default MathQuiz;
