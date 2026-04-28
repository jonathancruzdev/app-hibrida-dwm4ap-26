import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const semana = 'Semana 07';
  const span = <span> Algo </span>;

  return (
    <>
      <h1> React { semana } { span }</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto maiores dolorum numquam corrupti nam, iusto temporibus velit officiis, quo, error non? In dolorem similique illo impedit possimus quam nisi quibusdam.</p>
    </>

  )
}

export default App

