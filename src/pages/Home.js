import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { loadPopular, loadNew, loadUpcoming } from '../actions/gamesAction'

import GameCard from '../components/GameCard'

import './Home.css'

const Home = ({ category }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPopular())
    dispatch(loadNew())
    dispatch(loadUpcoming())
  }, [dispatch])

  const { popular, upcoming, newGames } = useSelector(state => state.games)

  return (
    <>
      <div className='game-list'>
        {category === 'popular' && (
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

        {category === 'new' && (
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

        {category === 'upcoming' && (
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
      </div>
    </>
  )
}

export default Home
