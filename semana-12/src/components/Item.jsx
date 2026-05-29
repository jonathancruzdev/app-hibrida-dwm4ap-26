import React from 'react'

const Item = ( {description, value, onSumar }) => {
  return (
    <li onClick={ onSumar} className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">{ description }</div>
        </div>
        <span className="badge text-bg-primary rounded-pill">{ value }</span>
    </li>

  )
}

export default Item
