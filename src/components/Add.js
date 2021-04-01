import React, {useState} from 'react'
import ResultCard from './ResultCard'

const Add = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleChangeQuery = (e) => {
    e.preventDefault()
    const searchQuery = e.target.value
    const api_key = process.env.REACT_APP_TMDB_KEY
    setQuery(searchQuery)

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
    .then(res => res.json())
    .then(data => {
      if (!data.errors) {
        setResults(data.results)
      } else {
        setResults([])
      }
    })
  }

  return (
    <div className="add-page">
      <div className="container">
        <h1 className="add-title">Search and add your favorite movie to your watchlist</h1>
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" value={query} onChange={handleChangeQuery} placeholder="Search for a movie" />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map(movie => (
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add