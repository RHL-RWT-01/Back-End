import React from 'react'

function Todos({todos}) {
  return (
    <>
    <h1>Todo List</h1>
    {todos.map((todo, index) => 
      <div style={{
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
        }}>{todo.completed==true?"Comleted":"Mark as Complete"}</button>
      </div>
    )}
    </>
  )
}

export default Todos