import React from 'react'

const Form = () => {
  return (
    <form className='card p-4'>
        <label htmlFor="descripcion">Descripción</label>
        <input type="text" name='description' className='form-control' />

        <label htmlFor="value">Valor</label>
        <input type="numbre" name='value' className='form-control' />

        <button className='btn btn-success' type='submit'>Agregar</button>
    </form>
  )
}

export default Form
