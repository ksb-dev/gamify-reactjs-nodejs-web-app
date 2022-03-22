import React, { useState } from 'react'

import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'

// Actions
import { loadSearched } from '../../actions/gamesAction'

// Styles
import './Search.css'

// Components
import SearchedResults from '../../components/SearchedResults/SearchedResults'

const Search = () => {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  return (
    <>
      <div className='home-search'>
        <Link to='/'>
          <h2>
            <i className='fa-solid fa-house'></i>
          </h2>
        </Link>

        <form
          onSubmit={e => {
            e.preventDefault()
            dispatch(loadSearched(query))
            setQuery('')
          }}
        >
          <input
            type='text'
            placeholder='Gamify here'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>

      <SearchedResults />
    </>
  )
}

export default Search
