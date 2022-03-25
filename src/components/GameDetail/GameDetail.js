import React, { useState, useEffect } from 'react'

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

// Components
import ImageSlider from '../ImageSlider/ImageSlider'

const GameDetail = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const [read, setRead] = useState(false)

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

  const getShadow = rating => {
    if (rating > 4) return 'greenShad'
    else if (rating > 3) return 'orangeShad'
    else return 'redShad'
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
        <div
          className='shadow'
          onClick={exitDetailHander}
          style={{ backgroundImage: `url(${game.background_image})` }}
        >
          <div className={`${getByRating(game.rating)} detail`}>
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
                    <i class='fa-solid fa-earth-americas'></i>
                  </h1>
                </a>
              )}

              <Link to='/'>
                <h2>
                  <i className='fa-solid fa-house'></i>
                </h2>
              </Link>
            </div>

            <div className='stats'>
              <div className='rating'>
                <h2>{game.name}</h2>
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

              <div className='info'>
                {game.platforms && (
                  <>
                    <h2>Platforms</h2>
                    <div className='platforms'>
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
                    </div>
                  </>
                )}
              </div>
            </div>

            {/*<div className='media'>
              <img
                className={getShadow(game.rating)}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
                    </div>*/}

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

            <div className='description'>
              {game.description_raw && (
                <>
                  <h2>Description</h2>
                  <p>
                    {!read && game.description_raw.substring(0, 250)}

                    {!read && game.description_raw.length > 250 && (
                      <span
                        onClick={() => setRead(true)}
                        className={getByRatingId(game.rating)}
                      >
                        {' '}
                        read more...
                      </span>
                    )}
                    {read && game.description_raw}

                    {read && game.description_raw.length > 250 && (
                      <span
                        onClick={() => setRead(false)}
                        className={getByRatingId(game.rating)}
                      >
                        {' '}
                        hide more
                      </span>
                    )}
                  </p>
                </>
              )}
            </div>

            <div className='gallery'>
              {screen.results.length > 0 && (
                <>
                  <h2>Screenshots</h2>
                  <ImageSlider
                    screen={screen}
                    getShadow={getShadow}
                    smallImage={smallImage}
                    game={game}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GameDetail
