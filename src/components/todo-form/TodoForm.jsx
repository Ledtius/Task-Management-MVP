import { useState } from "react";
import { useEffect } from "react";

const TodoForm = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({
    id: 0,
    name: "",
    state: false,
  });

  const { name } = task;

  const handleInput = (e) => {
    const eventValue = e.target.value;

    setTask({ ...task, id: crypto.randomUUID(), name: eventValue });
  };

  useEffect(() => {
    console.log(task);
    saveTask(taskList);

    console.log(taskList);
  }, [task]);

  const handleForm = (e) => {
    e.preventDefault();

    /* Not empty values in input */
    if (task.name === "") return;

    /* Not the same task name */
    const sameTask = taskList.some((taskInList) => {
      const { name } = task;
      return taskInList.name === name;
    });

    /* If isn't the same do... */
    if (!sameTask) {
      setTaskList(() => [...taskList, task]);
      saveTask(taskList);

      setTask({ ...task, name: "" });
    }
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
