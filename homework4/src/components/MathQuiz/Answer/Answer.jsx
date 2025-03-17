import React, { useState } from "react";

const Answer = ({ updatePoints, a, b }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (a + b === Number(userInput))
      updatePoints(1);
    else updatePoints(-1)
    setUserInput("");
  }

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userInput}
        onChange={handleChange}
        placeholder="Введите ответ"
        required />
      <button type="submit">Проверить</button>
    </form>
  );
};

export default Answer;
