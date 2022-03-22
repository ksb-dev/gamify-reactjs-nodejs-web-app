import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import GameCard from '../GameCard/GameCard'

import './SearchedResults.css'

const Find = () => {
  const { loading, searched, term } = useSelector(state => state.games)

  return (
    <>
      <div className='game-li'>
        {loading && (
          <div className='loading'>
            <div className='loader'></div>
          </div>
        )}

        {loading && searched.length <= 0 && (
          <div className='loading'>
            <h1>Please enter your search</h1>
          </div>
        )}

        {!loading && term && (
          <>
            <h2>
              Search results for <span>" {term} "</span>
            </h2>
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

export default Find
