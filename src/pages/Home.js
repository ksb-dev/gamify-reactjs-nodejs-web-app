import React, { useState, useEffect, useRef } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { loadPopular, loadNew, loadUpcoming } from '../actions/gamesAction'

// Components
import GameCard from '../components/GameCard/GameCard'
import Header from '../components/Header/Header'
import SideMenu from '../components/SideMenu/SideMenu'
import GameDetail from '../components/GameDetail/GameDetail'

import './Home.css'

const Home = () => {
  const [category, setCategory] = useState('popular')
  const [query, setQuery] = useState('')
  const [typed, setTyped] = useState('')

  const sideMenu = useRef(null)

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
      <Header
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
        setTyped={setTyped}
        sideMenu={sideMenu}
      />

      <SideMenu setCategory={setCategory} sideMenu={sideMenu} />

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
