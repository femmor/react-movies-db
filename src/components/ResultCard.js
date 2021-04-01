import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

const ResultCard = ({ movie }) => {
  const {title, poster_path, release_date, id} = movie

  const {addMovieToWatchlist, addMovieToWatched, watchlist, watched} = useContext(GlobalContext)

  // Search to see if the movie is already in the watchlist
  let storedMovie = watchlist.find(item => item.id === id)
  let storedWatched = watched.find(item => item.id === id)

  const watchlistDisabled = storedMovie ? true : false
  const watchedDisabled = storedWatched ? true : false

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {poster_path ? (<img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${title} Poster`}/>) : (<div className="filler-poster"></div>)}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{title}</h3>
          <h4 className="release-date">{release_date && `Released in: ${release_date.substring(0, 4)}`}</h4>
        </div>

        <div className="controls">
          <button className="light-btn" onClick={() => addMovieToWatchlist(movie)} disabled={watchlistDisabled}>
            Add to watchlist
          </button>
          <button className="light-btn" onClick={() => addMovieToWatched(movie)} disabled={watchedDisabled}>
            Add to watched
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
