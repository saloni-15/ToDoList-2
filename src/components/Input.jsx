import React, { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={inputText} />
      <button
        onClick={() => {
          props.addItems(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
