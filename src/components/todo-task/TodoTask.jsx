import { useState } from "react";
import { useEffect } from "react";

const TodoTask = ({ taskName, taskList, setTaskList, saveTask }) => {
  const handleCheckbox = (e) => {
    const checkValue = e.target.checked;

    /* Find the same task name in the array  */
    setTaskList((prevTaskList) => {
      const findIndex = prevTaskList.find(({ name }) => name === taskName);
      console.log(findIndex);
      return [
        ...prevTaskList.map((task) => {
          const { id, name, state } = task;
          if (findIndex === task) {
            return { id, name, state: checkValue };
          }
          return task;
        }),
      ];
    });
  };

  const findState = taskList.find(({ name }) => name === taskName);

  /* Find the state per task for the initial value in the checkbox */
  // const handleCheckboxState = () => {

  // };

  const handleDeleteBtn = () => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter(({ name }) => name !== taskName);
    });
  };

  const [eBStyles, setEBStyles] = useState({ display: "none" });

  const [editTaskN, setEditTaskN] = useState(taskName);

  const handleEditBtn = () => {
    console.log(editTaskN);
    console.log(taskName);
    setEBStyles({ ...eBStyles, display: "block" });
  };

  console.log(editTaskN);
  const handleEditAcceptBtn = () => {
    const sameTask = taskList.some(({ name }) => editTaskN === name);

    /* if the task is different */
    if (!sameTask) {
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) => {
          const { name, state } = task;

          if (name === taskName) {
            return { ...task, name: editTaskN };
          }
          return task;
        })
      );
      /* Si es la misma tarea, no quites el panel de edicion */
    } else return;

    // setTimeout(() => {}, [500]);
    setEBStyles({ ...eBStyles, display: "none" });
  };
  const handleEditCancelBtn = () => {
    setEBStyles({ ...eBStyles, display: "none" });
  };
  useEffect(() => {
    saveTask(taskList);

    console.log(taskList);
  }, [taskList]);

  return (
    <>
      <div>
        <input
          onChange={handleCheckbox}
          checked={findState.state}
          type="checkbox"
          name="checkTask"
          id="checkTask"
        />
        <div>
          <div>
            <input
              style={eBStyles}
              value={editTaskN}
              onChange={(e) => setEditTaskN(e.target.value)}
              type="text"
            />
            <div style={eBStyles}>
              <button onClick={handleEditAcceptBtn}>Accept</button>
              <button onClick={handleEditCancelBtn}>Cancel</button>
            </div>
          </div>
          <strong>{taskName}</strong>
          <div>
            <button onClick={handleEditBtn}>Edit</button>
            <button onClick={handleDeleteBtn}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
