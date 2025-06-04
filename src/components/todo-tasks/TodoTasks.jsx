import TodoTask from "../todo-task/TodoTask.jsx";

const TodoTasks = ({ task, setTask, taskList, setTaskList }) => {
  return (
    <>
      <div></div>
      {taskList.map(({ name }) => (
        <TodoTask
          taskName={name}
          taskList={taskList}
          setTaskList={setTaskList}
          key={name}
        />
      ))}
    </>
  );
};

export default TodoTasks;
