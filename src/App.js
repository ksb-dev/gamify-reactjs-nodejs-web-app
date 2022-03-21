import React, { useState, useRef } from 'react'

import Home from './pages/Home'
import joy from './img/joy8.jpg'

import './App.css'

const App = () => {
  const [category, setCategory] = useState('popular')

  const img = useRef(null)
  const cover = useRef(null)
  const cat = useRef(null)

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
    <div className='home'>
      <div className='image-back'>
        <img ref={img} src={joy} alt='' />

        <div ref={cover} className='cover'></div>

        <div ref={cat} className='cat'>
          <div className='name-search'>
            <h1>Gamify</h1>
            <form>
              <input type='text' placeholder='Gamify here' />
            </form>
          </div>

          <i className='fa-solid fa-bars-staggered'></i>

          <div className='categories'>
            <ul>
              <li onClick={() => setCategory('popular')}>popular</li>
              <li onClick={() => setCategory('upcoming')}>upcoming</li>
              <li onClick={() => setCategory('new')}>new</li>
            </ul>
          </div>
        </div>
      </div>
      <Home category={category} />
    </div>
  )
}

export default App
