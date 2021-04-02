import React, {createContext, useReducer, useEffect} from "react"
import AppReducer from "./AppReducer"

// initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

// create context
export const GlobalContext = createContext(initialState)

// provider components
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Persist data to localStorage
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  // actions - Add movie to watchlist
  const addMovieToWatchlist = movie => {
    dispatch({
      type: "ADD_MOVIE_TO_WATCHLIST",
      payload: movie
    })
  }

   // action - remove movie from watchlist
   const removeMovieFromWatchlist = id => {
    dispatch({
      type: "REMOVE_MOVIE_FROM_WATCHLIST",
      payload: id
    })
  }

   // actions - Add movie to watched
   const addMovieToWatched = movie => {
    dispatch({
      type: "ADD_MOVIE_TO_WATCHED",
      payload: movie
    })
  }

  // actions remove from watched
  const removeMovieFromWatched = id => {
    dispatch({
      type: "REMOVE_MOVIE_FROM_WATCHED",
      payload: id
    })
  }


  // actions move to watchlist
  const moveMovieToWatchlist = movie => {
    dispatch({
      type: "MOVE_MOVIE_TO_WATCHLIST",
      payload: movie
    })
  }
 

  return (
    <GlobalContext.Provider value={{ 
      watchlist: state.watchlist, 
      watched: state.watched,
      addMovieToWatchlist,
      addMovieToWatched,
      removeMovieFromWatchlist,
      moveMovieToWatchlist,
      removeMovieFromWatched
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}