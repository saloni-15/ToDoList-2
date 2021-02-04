import React, { useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function addItems() {
    setItems((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  } 

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <ToDo text={todoitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
