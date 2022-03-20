import React, { useState } from 'react'

import Home from './pages/Home'
import joy from './img/joy8.jpg'

import './App.css'

const App = () => {
  const [category, setCategory] = useState('popular')

  return (
    <div className='home'>
      <div className='image-back'>
        <img src={joy} alt='' />

        <div className='cover'></div>

        <div className='cat'>
          <h1>Gamify</h1>
          <h5>Gamify your community</h5>
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
