import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

import GameCard from '../components/GameCard'

import './Home.css'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  const { popular, upcoming, newGames } = useSelector(state => state.games)
  console.log(popular)

  return (
    <div className='game-list'>
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
    </div>
  )
}

export default Home
