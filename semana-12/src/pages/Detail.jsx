import React from 'react'
import { useParams } from 'react-router-dom'
const Detail = () => {

  const { id} = useParams();
  return (
    <div>
      <h2>Detalle de producto { id}</h2>
    </div>
  )
}

export default Detail