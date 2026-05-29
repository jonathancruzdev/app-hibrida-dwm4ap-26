import React from 'react'

const Footer = ( { description}) => {
  return (
    <footer className='bg-dark d-flex justify-content-center align-items-center text-white'>
        <p> { description  }</p>
    </footer>
  )
}

export default Footer
