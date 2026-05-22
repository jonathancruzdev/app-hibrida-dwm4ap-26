import React from 'react'
import '../App.css'
const Home = () => {

    const personajas = [ 'Superman', 'Iroman', 'Batman'];
  return (
    <div>
        <h1>Listado de Personaje</h1>
        <ul>
            {
                personajas.map( p => ( <li> { p} </li>))
            }
        </ul>
    </div>
  )
}

export default Home