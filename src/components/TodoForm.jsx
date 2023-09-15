import React, { useState} from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      gereja: props.gereja,
      name: input,
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
        />
        <button onClick={handleSubmit} className="todo-button">
          Add
        </button>
      </>
    </form>
  );
}

export default TodoForm;
