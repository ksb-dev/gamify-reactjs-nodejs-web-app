import React, { useState, useRef } from 'react'

import Home from './pages/Home'
import joy from './img/joy8.jpg'

import SideMenu from './components/SideMenu/SideMenu'

import { useDispatch } from 'react-redux'

import { loadSearched } from './actions/gamesAction'

import './App.css'

const App = () => {
  const [category, setCategory] = useState('popular')
  const [query, setQuery] = useState('')
  const [typed, setTyped] = useState('')

  const dispatch = useDispatch()

  const img = useRef(null)
  const cover = useRef(null)
  const cat = useRef(null)
  const sideMenu = useRef(null)

  window.onscroll = () => {
    scrollFunction()
  }

  window.onresize = () => {
    if (window.innerWidth > 1025) {
      sideMenu.current.style.transform = 'translateX(100%)'
    }
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

  const show = () => {
    sideMenu.current.style.transform = 'translateX(0%)'
  }

  const handleClick = (value, typed) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    if (value === 'popular') setCategory('popular')
    if (value === 'upcoming') setCategory('upcoming')
    if (value === 'new') setCategory('new')
    if (value === 'searched') {
      setCategory('searched')
      setTyped(typed)
    }
  }

  return (
    <>
      <div className='home'>
        {/*Header */}

        <div className='header'>
          <img ref={img} src={joy} alt='' />

          <div ref={cover} className='cover'></div>

          <div ref={cat} className='cat'>
            <div className='name-search'>
              <h1 onClick={() => handleClick('popular')}>Gamify</h1>

              <form
                onSubmit={e => {
                  e.preventDefault()
                  dispatch(loadSearched(query))
                  handleClick('searched', query)
                  setQuery('')
                }}
              >
                <input
                  type='text'
                  placeholder='Gamify here'
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </form>
            </div>

            <i className='fa-solid fa-bars-staggered' onClick={show}></i>

            <div className='categories'>
              <ul>
                <li onClick={() => handleClick('popular')}>popular</li>
                <li onClick={() => handleClick('upcoming')}>upcoming</li>
                <li onClick={() => handleClick('new')}>new</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Home */}

        <Home category={category} typed={typed} />

        <SideMenu setCategory={setCategory} sideMenu={sideMenu} />
      </div>
    </>
  )
}

export default App
