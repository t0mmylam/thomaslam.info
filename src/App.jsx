import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wrapper from './pages/Wrapper'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;