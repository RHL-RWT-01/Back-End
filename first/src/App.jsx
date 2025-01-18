import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [title,setTitle]= useState("Rahul")

  return (
    <>
      <Header title={title}/>
      <Header title={title}/>
    </>
  )
}

export default App
