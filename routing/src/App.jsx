import { useState } from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import Profile from './components/Profile'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
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
