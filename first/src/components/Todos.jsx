import React, {useState} from 'react'

function Todos({title,description}) {
    const [todos,setTodos]=useState([{}])
  return (
    <>
     <h1>{title}</h1>
     <p>{description}</p>
    </>
  )
}

export default Todos