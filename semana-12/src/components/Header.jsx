import React from 'react'

const Header = ( { title}) => {
  return (
    <header className='bg-success d-flex justify-content-center align-items-center text-white'>
        <h1> { title  }</h1>
    </header>
  )
}

export default Header
