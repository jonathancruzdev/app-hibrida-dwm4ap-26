import React from 'react'
import { useState } from 'react'
import Item from './Item'
import Count from './Count'


const ListsItems = ( { list}) => {
    const [ count, setCount] = useState( 0 );

    //  i + 1  !=  i++
    function sumar(){
        let aux = count + 1;  // count++
        setCount( aux );
        console.log('Sumando');
        
    }

    function handlerSumar() {
        console.log('Sumando desde el Hijo');
    }
  return (
    <>  
        <Count value={ count}/>
        <button onClick={ sumar }  className='btn btn-dark' type='button'> sumar</button>
        <ol className='list-group list-group-numbered'>
            {
                list.map( (item)=> (
                    <Item
                        onSumar={ handlerSumar} 
                        description={item.description} 
                        value={item.value} 
                    />
                ) )
            }
        </ol>
    </>

  )
}

export default ListsItems
