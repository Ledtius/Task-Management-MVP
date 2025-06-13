import { useState } from "react";
import { useEffect } from "react";

import TodoForm from "./components/todo-form/TodoForm.jsx";

import TodoTasks from "./components/todo-tasks/TodoTasks.jsx";

const TodoApp = () => {
  /* Lazy initialization  */
  const [taskList, setTaskList] = useState(() => {
    const recoveryStorage = JSON.parse(localStorage.getItem("tasks"));

    return recoveryStorage ? recoveryStorage : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
    console.log(taskList);
  }, [taskList]);

  return (
    <>
      <TodoForm taskList={taskList} setTaskList={setTaskList} />

      <TodoTasks taskList={taskList} setTaskList={setTaskList} />
    </>
  );
};

export default TodoApp;
