import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

//Styling and Animation
import { motion } from 'framer-motion'
import './GameDetail.css'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { smallImage } from '../../util'

// Actions
import { loadDetail } from '../../actions/detailAction'

const GameDetail = ({ pathId }) => {
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(loadDetail(id))
  }, [id, dispatch])

  //Exit Detail
  const exitDetailHander = e => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      //navigate('/')
    }
  }

  //GET PLATFORM IMAGES
  const getPlatform = platform => {
    switch (platform) {
      case 'PlayStation 4':
        return 'fa-brands fa-playstation'

      case 'Xbox One':
        return 'fa-brands fa-xbox'

      case 'PC':
        return 'fa-brands fa-steam'

      case 'Nintendo Switch':
        return 'fa-solid fa-mobile-screen-button'

      case 'iOS':
        return 'fa-brands fa-apple'

      default:
        return 'fa-solid fa-gamepad'
    }
  }

  //Data
  const { screen, game, isLoading, genre } = useSelector(state => state.detail)

  const { searched, term } = useSelector(state => state.games)

  const getByRating = rating => {
    if (rating > 4) return 'greenShadow'
    else if (rating > 3) return 'orangeShadow'
    else return 'redShadow'
  }

  const getByRatingId = rating => {
    if (rating > 4) return 'green'
    else if (rating > 3) return 'orange'
    else return 'red'
  }

  const getGenreColor = rating => {
    if (rating > 4) return 'greenGenre'
    else if (rating > 3) return 'orangeGenre'
    else return 'redGenre'
  }

  return (
    <>
      {isLoading && (
        <div className='loading'>
          <div className='loader'></div>
        </div>
      )}

      {!isLoading && (
        <motion.div
          className='shadow'
          onClick={exitDetailHander}
          style={{ backgroundImage: `url(${game.background_image})` }}
        >
          <motion.div
            className={`${getByRating(game.rating)} detail`}
            layoutId={pathId}
          >
            <div className='back-home'>
              {searched.length > 0 && term && (
                <Link to='/search'>
                  <h2>
                    <i className='fa-solid fa-arrow-left'></i>
                  </h2>
                </Link>
              )}

              {searched.length === 0 && (
                <Link to='/search'>
                  <h2>
                    <i className='fa-solid fa-magnifying-glass'></i>
                  </h2>
                </Link>
              )}

              {game.website && (
                <a
                  href={game.website}
                  target='_blank'
                  className='website'
                  rel='noreferrer'
                >
                  <h1>
                    <i className='fa-solid fa-globe'></i>
                  </h1>
                </a>
              )}

              <Link to='/'>
                <h2>
                  <i className='fa-solid fa-house'></i>
                </h2>
              </Link>
            </div>
            <motion.div className='stats'>
              <div className='rating'>
                <motion.h2 layoutId={`title ${pathId}`}>{game.name}</motion.h2>
                <h2>
                  Rating
                  <i
                    className='fa-solid fa-star'
                    id={getByRatingId(game.rating)}
                  >
                    {game.rating}
                  </i>
                </h2>
              </div>

              <motion.div className='info'>
                {game.platforms && (
                  <>
                    <h2>Platforms</h2>
                    <motion.div className='platforms'>
                      {game.platforms.map(data => {
                        return (
                          <h2 key={data.platform.name}>
                            <i
                              className={getPlatform(data.platform.name)}
                              id={getByRatingId(game.rating)}
                            ></i>
                          </h2>
                        )
                      })}
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>

            <motion.div className='media'>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </motion.div>

            <div className='genre'>
              <ul className='genre-list'>
                {genre.genres.length > 0 &&
                  genre.genres.map(data => {
                    return (
                      <li
                        key={data.name}
                        className={getGenreColor(game.rating)}
                      >
                        {data.name}
                      </li>
                    )
                  })}
              </ul>
            </div>

            <motion.div className='description'>
              {game.description && (
                <>
                  <h2>Description</h2>
                  <p>{game.description_raw}</p>
                </>
              )}
            </motion.div>

            <div className='gallery'>
              {screen.results.length > 0 && (
                <>
                  <h2>Scrrenshots</h2>
                  {screen.results.map(screen => (
                    <img
                      src={smallImage(screen.image, 1280)}
                      key={screen.id}
                      alt={screen.image}
                    />
                  ))}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default GameDetail
