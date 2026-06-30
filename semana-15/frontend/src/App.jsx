import { useState } from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'

import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Nav />
      <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/register' element={ <Register />} />
          <Route path='/dashboard' element={ <Dashboard />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
