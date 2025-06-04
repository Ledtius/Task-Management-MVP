const TodoTask = ({ taskName, taskList, setTaskList }) => {
  return (
    <>
      <div>
        <input type="checkbox" name="checkTask" id="checkTask" />
        <div>
          <strong>{taskName}</strong>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
