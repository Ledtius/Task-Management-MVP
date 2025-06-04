import { useState } from "react";

import TodoForm from "./components/todo-form/TodoForm.jsx";

import TodoTasks from "./components/todo-tasks/TodoTasks.jsx";

const TodoApp = () => {
  const [task, setTask] = useState({ name: "", state: false });

  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <TodoForm
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />

      <TodoTasks
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </>
  );
};

export default TodoApp;
