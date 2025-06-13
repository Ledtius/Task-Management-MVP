import { useState } from "react";
import { useEffect } from "react";

import TodoForm from "./components/todo-form/TodoForm.jsx";

import TodoTasks from "./components/todo-tasks/TodoTasks.jsx";

const TodoApp = () => {
  /* Localstorage */

  const saveTask = (taskList) => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  const recoveryTasks = () => {
    const value = JSON.parse(localStorage.getItem("taskList")) || [];

    return value;
  };

  const [taskList, setTaskList] = useState(() => {
    const recoveryStorage = JSON.parse(localStorage.getItem("taskList"));

    return recoveryStorage ? recoveryStorage : [];
  });

  useEffect(() => {}, [taskList]);

  return (
    <>
      <TodoForm taskList={taskList} setTaskList={setTaskList} />

      <TodoTasks
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
        saveTask={saveTask}
        recoveryTasks={recoveryTasks}
      />
    </>
  );
};

export default TodoApp;
