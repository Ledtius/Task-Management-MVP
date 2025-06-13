import TodoTask from "../todo-task/TodoTask.jsx";

const TodoTasks = ({ taskList, setTaskList }) => {
  let recoveryVariable;

  return (
    <>
      <div></div>
      {taskList.map(({ id, name, state }) => {
        return (
          <TodoTask
            taskId={id}
            taskName={name}
            taskState={state}
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
