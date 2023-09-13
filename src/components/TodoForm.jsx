import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: input,
      gereja: props.gereja
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <>
        <input
          placeholder="Nama"
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-input"
          ref={inputRef}
        />
        <button onClick={handleSubmit} className="todo-button">
          Add
        </button>
      </>
    </form>
  );
}

export default TodoForm;
