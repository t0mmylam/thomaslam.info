import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wrapper from './pages/Wrapper'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;