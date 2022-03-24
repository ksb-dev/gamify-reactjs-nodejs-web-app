import React, { useState, useEffect, useRef } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { loadPopular, loadNew, loadUpcoming } from '../../actions/gamesAction'
import { loadSearched } from '../../actions/gamesAction'

// Components
import GameCard from '../../components/GameCard/GameCard'
import Header from '../../components/Header/Header'
import SideMenu from '../../components/SideMenu/SideMenu'

import './Home.css'

const Home = () => {
  const [category, setCategory] = useState(
    JSON.parse(localStorage.getItem('cat'))
  )

  console.log(category)

  const sideMenu = useRef(null)

  const dispatch = useDispatch()

  const { popular, upcoming, newGames, loading } = useSelector(
    state => state.games
  )

  useEffect(() => {
    if (category === null) {
      localStorage.setItem('cat', JSON.stringify('popular'))
      setCategory('popular')
    } else {
      localStorage.setItem('cat', JSON.stringify(category))
    }
    if (popular.length <= 0) {
      dispatch(loadPopular())
    }
    if (upcoming.length <= 0) {
      dispatch(loadNew())
    }
    if (newGames.length <= 0) {
      dispatch(loadUpcoming())
    }
    localStorage.setItem('term', JSON.stringify(''))
    dispatch(loadSearched(''))
  }, [dispatch, category])

  return (
    <>
      <Header setCategory={setCategory} sideMenu={sideMenu} />

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

        {/*{!loading && category === 'searched' && (
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
            )}*/}
      </div>
    </>
  )
}

export default Home
