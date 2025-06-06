import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [listOfTask, setListOfTask] = useState([]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setTask(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setListOfTask([...listOfTask, task]);
    setTask("");
  };
  console.log(listOfTask);
  const handleOnClick = (indexToDelete) => {
    const updatedTask = listOfTask.filter((_, idx) => idx !== indexToDelete);
    setListOfTask(updatedTask);
  };

  return (
    <div className="container mt-5 text-center">
      <form onSubmit={handleOnSubmit}>
        Task
        <input type="text" name="todo" onChange={handleOnChange} value={task} />
        <button type="submit" className="btn btn-success mt-4">
          Add
        </button>
      </form>
      <h2>Display List</h2>
      <div>
        {listOfTask.map((tsk, idx) => {
          return (
            <ul key={idx}>
              <li>
                {tsk}
                <button type="button" onClick={() => handleOnClick(idx)}>
                  Delete
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
