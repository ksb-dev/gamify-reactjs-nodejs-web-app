import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { loadPopular, loadNew, loadUpcoming } from '../actions/gamesAction'

import GameCard from '../components/GameCard/GameCard'

import './Home.css'

const Home = ({ category, typed }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPopular())
    dispatch(loadNew())
    dispatch(loadUpcoming())
  }, [dispatch])

  const { popular, upcoming, newGames, loading, searched } = useSelector(
    state => state.games
  )

  return (
    <>
      <div className='game-list'>
        {loading && (
          <div className='loading'>
            <div className='loader'></div>
          </div>
        )}

        {!loading && category === 'popular' && (
          <>
            <h2>Popular Games</h2>

            <div className='games'>
              {popular.map(game => {
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

        {!loading && category === 'new' && (
          <>
            <h2>New Games</h2>

            <div className='games'>
              {newGames.map(game => {
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

        {!loading && category === 'upcoming' && (
          <>
            <h2>Upcoming Games</h2>

            <div className='games'>
              {upcoming.map(game => {
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

        {!loading && category === 'searched' && (
          <>
            <h2>
              Search results for <span>" {typed} "</span>
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

export default Home
