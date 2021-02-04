import React, { useState } from "react";

function ToDo(props) {
  const [isDone, setIsDone] = useState(false);

  function handleclick() {
    setIsDone((prev) => {
      return !prev;
    });
  }

  return (
    <li
      onClick={handleclick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default ToDo;
