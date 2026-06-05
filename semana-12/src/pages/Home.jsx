import React from 'react'
import Form from '../components/Form'
import ListsItems from '../components/ListsItems'
import { Link } from 'react-router-dom'

const list = [
    { id:1, description: 'Cafe', value: 5000},
    { id:2, description: 'Sube', value: 10000},
    { id:3, description: 'Agua', value: 3000}
]


const Home = () => {
  return (
    <main className='container'>
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="card">
                    <h4>Producto 1</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus quos aut veniam. </p>
                    <Link to='/detail/1'> Ver más </Link>
                </div>
                <div className="card">
                    <h4>Producto 2</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus quos aut veniam. </p>
                    <Link to='/detail/2'> Ver más </Link>
                </div>
                <div className="card">
                    <h4>Producto 3</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus quos aut veniam. </p>
                    <Link to='/detail/3'> Ver más </Link>
                </div>

            </div>
            <div className="col-md-6">
                <ListsItems list={ list} />
            </div>
        </div>
    </main>
  )
}

export default Home
