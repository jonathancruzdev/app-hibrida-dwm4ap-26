import React from 'react'
import { useState} from 'react'

const Count = ( { value}) => {
  return (
    <div>
        <h4>
            Total <div className='badge text-bg-secondary'>
                { value }
            </div>
        </h4>
      
    </div>


  )
}

export default Count
