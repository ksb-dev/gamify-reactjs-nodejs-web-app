import React, { useRef } from 'react'

// Styles
import './GameCard.css'

// Redux
import { useDispatch } from 'react-redux'

// Actions
import { loadDetail } from '../../actions/detailAction'

const GameCard = ({ name, released, id, image, rating }) => {
  const addMore = useRef(null)

  const dispatch = useDispatch()

  const show = () => {
    addMore.current.style.transform = 'translateY(0%)'
  }

  const hide = () => {
    addMore.current.style.transform = 'translateY(130%)'
  }

  const getByRating = rating => {
    if (rating > 4) return 'green'
    else if (rating > 3) return 'orange'
    else return 'red'
  }

  const handleDetail = () => {
    dispatch(loadDetail(id))
  }

  return (
    <div className='game' onMouseOver={show} onMouseOut={hide}>
      <div className='name-rating'>
        <h3 className={getByRating(rating)}>
          <i className='fa-solid fa-star'></i>
          {rating}
        </h3>
        <h4>{name}</h4>
        <h5>{released}</h5>
      </div>

      <div className='image'>
        <img src={image} alt={name} />
      </div>

      <div ref={addMore} className='add-more'>
        <h1>
          <i className='fa-solid fa-circle-info fa-1x'></i>
        </h1>
        <h3 onClick={handleDetail}>
          <i className='fa-solid fa-plus'></i>Wishlist
        </h3>
      </div>
    </div>
  )
}

export default GameCard
