import React from 'react'

function Todos({todos}) {
   
    const markAsComplete=({id:_id})=>{
        // mark the todo as complete
        fetch('http://localhost:3000/completed', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: id,
            })    
    })
    }
  return (
    <>
    <h1>Todo List</h1>
    {todos.map((todo, index) => 
      <div id={todo._id} 
      style={{
        border: '1px solid black',
        marginBottom: '10px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: todo.completed==true?"aqua":"pink"
     }} key={index}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <button style={{
            backgroundColor: 'blue',
        }}
        onClick={markAsComplete((todo._id))} 
        >{todo.completed==true?"Comleted":"Mark as Complete"} </button>
      </div>
    )}
    </>
  )
}

export default Todos