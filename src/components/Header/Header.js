import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Actions
//import { loadPopular, loadUpcoming, loadNew } from '../../actions/gamesAction'

// Images
import joy from '../../img/joy8.jpg'

// Styles
import './Header.css'

const Header = ({ setCategory, sideMenu }) => {
  const navigate = useNavigate()

  const img = useRef(null)
  const cover = useRef(null)
  const cat = useRef(null)

  const handleClick = value => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    if (value === 'popular') {
      setCategory('popular')
      //dispatch(loadPopular())
      navigate('/')
    }
    if (value === 'upcoming') {
      setCategory('upcoming')
      //dispatch(loadUpcoming())
      navigate('/')
    }
    if (value === 'new') {
      setCategory('new')
      //dispatch(loadNew())
      navigate('/')
    }
  }

  const show = () => {
    sideMenu.current.style.transform = 'translateX(0%)'
  }

  window.onscroll = () => {
    scrollFunction()
  }

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      img.current.style.height = '50px'
      cover.current.style.height = '50px'
      cat.current.style.height = '50px'
    } else {
      img.current.style.height = '200px'
      cover.current.style.height = '200px'
      cat.current.style.height = '200px'
    }
  }

  return (
    <>
      <div className='header'>
        <img ref={img} src={joy} alt='' />

        <div ref={cover} className='cover'></div>

        <div ref={cat} className='cat'>
          <div className='name-search'>
            <h1 onClick={() => handleClick('popular')}>Gamify</h1>
            <Link to='/search'>
              <h2>
                <i className='fa-solid fa-magnifying-glass' />
              </h2>
            </Link>
          </div>

          <i className='fa-solid fa-bars-staggered' onClick={show}></i>

          <div className='categories'>
            <ul>
              <li>Wishlist</li>
              <li onClick={() => handleClick('popular')}>popular</li>
              <li onClick={() => handleClick('upcoming')}>upcoming</li>
              <li onClick={() => handleClick('new')}>new</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
