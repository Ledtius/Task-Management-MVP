import TodoTask from "../todo-task/TodoTask.jsx";

const TodoTasks = ({ taskList, setTaskList }) => {
  let recoveryVariable;

  return (
    <>
      <div></div>
      {taskList.map(({ id, name }) => {
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
