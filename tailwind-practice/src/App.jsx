import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class='flex justify-center item-center h-screen bg-pink-500 dark:bg-black text-white'> 
      <div class='w-12 flex-1 '>Hi</div>
      <div class='w-64 flex-1'>Rahul</div>
      <div class='w-32 flex-1'>Rawat</div>
      <div class='w-25 flex-1'>Hello</div>
    </div>
      
    </>
  )
}

export default App
