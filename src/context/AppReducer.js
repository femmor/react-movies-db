const AppReducer = (state, action) => {
  switch (action.type) {
    // addMovieToWatchlist Reducer
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      }

    // addMovieToWatched Reducer
    case 'ADD_MOVIE_TO_WATCHED':
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
        watched: [action.payload, ...state.watched]
      }

    // removeMovieFromWatchlist Reducer
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
      }

    // moveMovieToWatchlist Reducer
    case "MOVE_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist]
      }

    // moveMovieToWatched Reducer
    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== action.payload)
      }
      
    default:
      return state;
  }
}

export default AppReducer