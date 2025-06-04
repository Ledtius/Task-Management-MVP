import { useState } from "react";
import { useEffect } from "react";

const TodoForm = ({ task, setTask, taskList, setTaskList }) => {
  const { name } = task;

  const handleInput = (e) => {
    const eventValue = e.target.value;
    console.log(eventValue);

    setTask({ ...task, name: eventValue });
  };

  useEffect(() => {
    console.log(task);
    console.log(taskList);
  }, [task, taskList]);

  const handleForm = (e) => {
    e.preventDefault();

    setTaskList([...taskList, task]);

    setTask({ ...task, name: "" });
  };

  return (
    <>
      <div>
        <h1> Todo List - React JS</h1>
        <form onSubmit={handleForm} action="">
          <label htmlFor="input">Write your task</label>
          <input onChange={handleInput} id="input" type="text" value={name} />
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
