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
  }, [])

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
        return 'fa-solid fa-tablet'

      case 'iOS':
        return 'fa-brands fa-apple'

      default:
        return ''
    }
  }

  //Data
  const { screen, game, isLoading } = useSelector(state => state.detail)

  const getByRating = rating => {
    if (rating > 4) return 'green'
    else if (rating > 3) return 'orange'
    else return 'red'
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
          style={{
            background: `url(${smallImage(game.background_image, 1280)})`
          }}
        >
          <motion.div className='detail' layoutId={pathId}>
            <Link to='/'>
              <h1>
                <i class='fa-solid fa-xmark'></i>
              </h1>
            </Link>
            <motion.div className='stats'>
              <div className='rating'>
                <motion.h2 layoutId={`title ${pathId}`}>{game.name}</motion.h2>
                <h2 className={getByRating(game.rating)}>
                  <i className='fa-solid fa-star'></i> {game.rating}
                </h2>
              </div>

              <motion.div className='info'>
                <h2>Platforms</h2>
                <motion.div className='platforms'>
                  {game.platforms.map(data => {
                    return (
                      <h2 key={data.platform.name}>
                        <i className={getPlatform(data.platform.name)}></i>
                      </h2>
                    )
                  })}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className='media'>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </motion.div>

            <motion.div className='description'>
              <h2>Description</h2>
              <p>{game.description_raw}</p>
            </motion.div>

            <div className='gallery'>
              <h2>Scrrenshots</h2>
              {screen.results.map(screen => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default GameDetail
