import React from 'react'

const SupportTodolist = (props)=>{
    return(
        <>
        <li><button className="todo_delete_button" onClick={()=>{
            props.onselect(props.id)
        }}>D</button> {props.text}</li>
        </>
    )
}
export default SupportTodolist;