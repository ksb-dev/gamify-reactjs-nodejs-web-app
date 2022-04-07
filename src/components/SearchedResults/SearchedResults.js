import React, { useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { loadSearched } from '../../actions/gamesAction'

// Components
import GameCard from '../GameCard/GameCard'

import './SearchedResults.css'

const Find = () => {
  const { loading, searched, term } = useSelector(state => state.games)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadSearched(JSON.parse(localStorage.getItem('term'))))
  }, [dispatch])

  return (
    <>
      <div className='game-li'>
        {loading && (
          <div className='loading'>
            <div className='loader'></div>
          </div>
        )}

        {term && (
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

        {searched.length <= 0 && term && (
          <div className='loading'>
            <h1>your search Not Found !</h1>
          </div>
        )}
      </div>
    </>
  )
}

export default Find
