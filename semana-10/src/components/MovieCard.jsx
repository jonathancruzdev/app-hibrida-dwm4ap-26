import React from 'react'

const MovieCard = ( { title, image}) => {
    //const title = props.title;
    //const image = props.image;
    return (
        <div className='card'>
            <img src={image} alt="Imagene de peli" />
            <div className="card-content">
                <h4> { title }</h4>

                <button>Ver Peli</button>

            </div>
        </div>
    )
}

export default MovieCard