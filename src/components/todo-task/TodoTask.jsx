import { useState } from "react";

const TodoTask = ({ taskName, taskList, setTaskList }) => {
  const handleCheckbox = (e) => {
    const checkValue = e.target.checked;

    /* Find the same task name in the array  */

    setTaskList((prevTaskList) => {
      const findIndex = prevTaskList.find(({ name }) => name === taskName);

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

  const handleEditCancelBtn = () => {};
  const handleEditAcceptBtn = () => {
    const sameTask = taskList.some(({ name }) => editTaskN === name);

    /* The task is different */
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
    }
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
          <div>
            <input
              style={eBStyles}
              value={editTaskN}
              onChange={(e) => setEditTaskN(e.target.value)}
              type="text"
            />
            <div style={eBStyles}>
              <button onClick={handleEditAcceptBtn}>Accept</button>
              <button>Cancel</button>
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
