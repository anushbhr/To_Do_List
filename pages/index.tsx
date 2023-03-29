import React, { useState } from "react";

function Home() {
  const [addTask, setAddTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (e) => {
    console.log("e", e);
    setAddTask(e.target.value);
  };

  const onAdd = (e) => {
    e.preventDefault();
    setAddTask("");
    let list = [...toDoList];
    if (list.length > 9) {
      list.pop();
      list.unshift(addTask);
      setToDoList(list);
    } else {
      setToDoList([addTask, ...toDoList]);
    }
  };

  const onDelete = (index) => {
    const newList = toDoList.filter((item, i) => i != index);

    setToDoList(newList);
  };

  return (
    <div
      style={{
        backgroundColor: "#d9d9d9",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderColor: "black",
          borderWidth: "medium",
          borderRadius: "5px",
          borderStyle: "solid",
          width: "40%",
          backgroundColor: "#b2f7e5",
          padding: "8px",
        }}
      >
        <h1
          style={{ textAlign: "center", margin: "8px", marginBottom: "16px" }}
        >
          TO DO LIST
        </h1>
        <form>
          <input
            type={"text"}
            value={addTask}
            onChange={handleChange}
            placeholder="Add your task"
            style={{
              width: "80%",
              height: "30px",
              margin: "8px",
              padding: "4px",
            }}
          />
          <button
            style={{
              height: "30px",
              width: "70px",
              cursor: "pointer",
              backgroundColor:
                !addTask || addTask.trim().length === 0 ? "#e7e7e7" : "#f44336",
              color:
                !addTask || addTask.trim().length === 0 ? "#999997" : "white",
            }}
            onClick={onAdd}
            disabled={!addTask || addTask.trim().length === 0}
          >
            Add
          </button>
        </form>

        {toDoList?.map((ele, index) => {
          return (
            <div
              key={index}
              style={{
                margin: "16px",
                padding: "8px",
                borderColor: "black",
                borderWidth: "thin",
                borderRadius: "5px",
                borderStyle: "solid",
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#f5f18a",
              }}
            >
              {ele}

              <button
                style={{ height: "30px", width: "50px", cursor: "pointer" }}
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
