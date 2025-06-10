import TodoTask from "../todo-task/TodoTask.jsx";

const TodoTasks = ({ task, setTask, taskList, setTaskList }) => {
  const recoveryData = () => {
    const value = JSON.parse(localStorage.getItem("taskList")) || [];
    console.log(value);
    return value;
  };

  return (
    <>
      <div></div>
      {recoveryData().map(({ id, name }) => {
        return (
          <TodoTask
            taskName={name}
            taskList={taskList}
            setTaskList={setTaskList}
            key={id}
          />
        );
      })}
    </>
  );
};

export default TodoTasks;
