import React from 'react'
import MovieControls from "./MovieControls"

const MovieCard = ({ movie, type }) => {
  const {title, poster_path} = movie
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {poster_path ? (<img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${title} Poster`}/>) : (<div className="filler-poster"></div>)}
      <MovieControls type={type} movie={movie}/>
    </div>
  )
}

export default MovieCard
