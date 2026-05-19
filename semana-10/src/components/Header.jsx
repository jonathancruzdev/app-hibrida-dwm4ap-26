import React from 'react'
import logo from '../assets/react.svg'

function Header() {
  console.log(logo)
  return (
    <header className='header'>
      <div className='logo-container'>
        <img src={logo} alt="logo de la app"  className='logo-img'/>
        <span className='logo-text'> MovieAPP</span>
      </div>
      <div className='nav'>
        <span> Inicio</span>
        <span>Series</span>
        <span>Perfil</span>
      </div>
    </header>
  )
}

export default Header
