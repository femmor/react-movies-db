import React from 'react'

const ResultCard = ({ movie }) => {
  const {title, poster_path} = movie
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {poster_path ? (<img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${title} Poster`}/>) : (<div className="filler-poster"></div>)}
      </div>
    </div>
  )
}

export default ResultCard
