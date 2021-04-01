import React, {useState} from 'react'

const Add = () => {
  const [query, setQuery] = useState('')

  const handleChangeQuery = (e) => {
    e.preventDefault()
    const searchQuery = e.target.value
    const api_key = process.env.REACT_APP_TMDB_KEY
    setQuery(searchQuery)


    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" value={query} onChange={handleChangeQuery} placeholder="Search for a movie" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add