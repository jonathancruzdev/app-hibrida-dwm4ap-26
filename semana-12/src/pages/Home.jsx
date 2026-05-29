import React from 'react'
import Form from '../components/Form'
import ListsItems from '../components/ListsItems'

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
                <Form />

            </div>
            <div className="col-md-6">
                <ListsItems list={ list} />
            </div>
        </div>
    </main>
  )
}

export default Home
