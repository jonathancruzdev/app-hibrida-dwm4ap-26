import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

// Por el momenot usamos una array local
import { movies } from '../data/movies.js'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />

        <MovieList movies={movies} />

        <Footer />
    </>
  )
}

export default Home