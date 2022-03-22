import React from 'react'

import { Link } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Components
import GameCard from '../../components/GameCard/GameCard'

import './Search.css'

const Search = () => {
  const { loading, searched, term } = useSelector(state => state.games)

  return (
    <>
      <div className='game-li'>
        {loading && searched.length <= 0 && (
          <div className='loading'>
            <h1>Go back to home and enter your search</h1>
          </div>
        )}

        {loading && searched.length > 0 && (
          <div className='loading'>
            <div className='loader'></div>
          </div>
        )}

        {!loading && term && (
          <>
            <div className='home-res'>
              <h2>
                Search results for <span>" {term} "</span>
              </h2>
              <Link to='/'>
                <h2>
                  <i class='fa-solid fa-house'></i>
                </h2>
              </Link>
            </div>

            <div className='games'>
              {searched.map(game => {
                return (
                  <GameCard
                    key={game.id}
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    image={game.background_image}
                    rating={game.rating}
                  />
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Search
