import React from 'react'

const Header = ( props ) => {
  return (
    <header className='bg-dark text-white d-flex justify-content-center align-items-center'>
        <h1> { props.title }</h1>
    </header>
  )
}

export default Header