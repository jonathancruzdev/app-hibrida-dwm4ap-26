import reactLogo from './assets/react.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Nav from './components/Nav'

import Home from './pages/Home'
import Login from './pages/Login'
// import Register  from './pages/Register'
import Detail from './pages/Detail'
import NotFund from './pages/NotFund'

import Footer from './components/Footer'
import { Register } from './pages/Register'
function App() {

  return (
    <>
      <Header title='APP' />
      <Nav />
        <Routes>
          <Route  path='/'  element={  <Home /> } />
          <Route path='/login' element={ <Login />} />
          <Route path='/register' element={ <Register />} />
          <Route path='/detail/:id' element={ <Detail />} />

          <Route path='*' element={ <NotFund />} />
        </Routes>

        
      <Footer description='Aplicaciones Híbridas | 2026' />
    </>
  )
}

export default App
