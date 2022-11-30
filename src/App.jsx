import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Logo from './components/Logo'
import Wrapper from './pages/Wrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route path='/' element={<Home />} />
          <Route path='/logo' element={<Logo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;