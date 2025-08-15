import React from 'react'
import Nav from './components/nav'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Courses from './pages/Courses';

const App = () => {
  return (
    <div>
            <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Courses' element={<Courses/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </div>
  )
}

export default App