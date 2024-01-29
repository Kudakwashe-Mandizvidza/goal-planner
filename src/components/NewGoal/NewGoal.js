import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    setEnteredText("");

    props.onAddGoal(newGoal);
  };
  const handleChange = (event) => {
    setEnteredText(event.target.value);
  };
  return (
    <form className="new-goal" onSubmit={handleAdd}>
      <input
        type="text"
        value={enteredText}
        onChange={handleChange}
        placeholder="What is your new goal?"
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
