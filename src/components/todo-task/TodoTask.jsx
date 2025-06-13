import { useState } from "react";
import { useEffect } from "react";

const TodoTask = ({ taskId, taskName, taskState, taskList, setTaskList }) => {
  const [eBStyles, setEBStyles] = useState({ display: "none" });

  const [editTaskN, setEditTaskN] = useState(taskName);

  const handleCheckbox = (e) => {
    const checkValue = e.target.checked;

    setTaskList((prevTaskList) => {
      console.log(prevTaskList);
      return prevTaskList.map((task) => {
        if (task.id === taskId) return { ...task, state: checkValue };
        return task;
      });
    });
  };

  const handleDeleteBtn = () => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter(({ id }) => id !== taskId);
    });
  };

  const handleEditBtn = () => {
    setEBStyles({ ...eBStyles, display: "block" });
  };

  console.log(editTaskN);
  const handleEditAcceptBtn = () => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => {
        if (task.id === taskId) return { ...task, name: editTaskN };
        return task;
      })
    );

    setEBStyles({ ...eBStyles, display: "none" });
  };

  const handleEditCancelBtn = () => {
    setEBStyles({ ...eBStyles, display: "none" });
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <>
      <div>
        <input
          onChange={handleCheckbox}
          checked={taskState}
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
