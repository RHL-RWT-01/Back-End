import { useState } from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import Profile from './components/Profile'

import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
function App() {
 const navigate=useNavigate();
  const Profile=function(){
    navigate('/profile');
  }
  return (
    <>
      <BrowserRouter>
       <button onClick={Profile} >Go to profile</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
