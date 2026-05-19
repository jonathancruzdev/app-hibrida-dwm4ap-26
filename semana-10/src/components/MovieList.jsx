import React from 'react'

import MovieCard from './MovieCard'

function MovieList({ movies}) {

  console.log(movies)
  return (
    <div className='movie-grid'>
      {
        movies.map( movie => (
          <MovieCard title={movie.title} image={movie.image} />

        ) )
      }

    </div>
  )
}

export default MovieList
