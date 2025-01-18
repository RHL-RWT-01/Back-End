import React,{useState,memo} from 'react'

function Header({title}) {
    const [set,setset]= useState("Rahul")

  function handleClick(){
    setset("Rahul Rawat "+Math.floor(Math.random()*100))
  }
  return (
    <>
      <div>
        <h1 >{title}</h1>
        <button onClick={handleClick}>Change Title</button>
        <h1 >{set}</h1>
      </div>
    </>
  )
}

export default memo(Header)