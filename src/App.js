import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from './pages/Home/Home'
import GameDetail from './components/GameDetail/GameDetail'
import Search from './pages/Search/Search'

// Styles
import './App.css'

const App = () => {
  return (
    <>
      <div className='home'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<GameDetail />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
