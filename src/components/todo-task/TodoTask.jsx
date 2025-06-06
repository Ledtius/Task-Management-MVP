const TodoTask = ({ taskName, taskList, setTaskList }) => {
  const handleCheckbox = (e) => {
    const checkValue = e.target.checked;

    /* Find the same the same task name in the array  */

    setTaskList((prevTaskList) => {
      const findIndex = prevTaskList.find(({ name }) => name === taskName);

      console.log(findIndex);

      return [
        ...prevTaskList.map((task) => {
          const { name, state } = task;
          if (findIndex === task) {
            return { name, state: checkValue };
          }
          return task;
        }),
      ];
    });
  };

  const handleDeleteBtn = () => {
    console.log(taskName);
    console.log();

    console.log(taskList);
    setTaskList((prevTaskList) => {
      return prevTaskList.filter(({ name }) => name !== taskName);
    });
  };

  return (
    <>
      <div>
        <input
          onClick={handleCheckbox}
          type="checkbox"
          name="checkTask"
          id="checkTask"
        />
        <div>
          <strong>{taskName}</strong>
          <div>
            <button>Edit</button>
            <button onClick={handleDeleteBtn}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
