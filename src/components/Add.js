import React, {useState} from 'react'

const Add = () => {
  const [query, setQuery] = useState('')

  const handleChangeQuery = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
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