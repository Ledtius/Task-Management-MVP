import TodoTask from "../todo-task/TodoTask.jsx";

const TodoTasks = ({
  task,
  setTask,
  taskList,
  setTaskList,
  saveTask,
  recoveryTasks,
}) => {
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
            saveTask={saveTask}
          />
        );
      })}
    </>
  );
};

export default TodoTasks;
