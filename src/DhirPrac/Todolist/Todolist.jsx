import React, { useState } from "react";
import "./Todolist.css";
import "./SupportTodolist"
import SupportTodolist from "./SupportTodolist";
const Todolist = () => {
  const [name, setName] = useState(); 
  const [data, setData] = useState([]);
  const inputEvent = (event) => setName(event.target.value);
  const buttonclick = ()=>{
    setData((olddata)=>{
      return [...olddata, name ]
    })
    setName("");
  }
  const deleteitem = (id)=>{
    setData((olddata)=>{
      return olddata.filter((element,index)=>{
           return index !== id;
      })
    })
  }
  
  return (
    <>
    <h1 className="todo_top_heading"> project no 6. ToDo List  (props, hooks, array_map & array_filter method) included</h1>
      <div className="todo_main_div">
        <div className="todo_div">
          <br />
          <h1 className="todo_heading">Todo List</h1>
          <br />
          <input
            type="text"
            value={name}
            className="todo_input"
            placeholder="Add an Item"
            onChange={inputEvent}
          />
          <span>
            <button className="todo_button" onClick={buttonclick}>
              A
            </button>
          </span>
          <br />
          <br />
          <ol>
              {data.map((value, index)=>{
                return ( 
                  <SupportTodolist
                    text = {value}
                    id = {index}
                    key = {index}
                    onselect = {deleteitem}
                  />
                  )
              })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Todolist;
