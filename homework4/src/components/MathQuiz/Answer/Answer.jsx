import React, { useState } from "react";

const Answer = ({ updatePoints }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event)=>{
    event.preventDefault();
    updatePoints(userInput);
    setUserInput("");
  }

  const handleChange = (event)=>{
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
