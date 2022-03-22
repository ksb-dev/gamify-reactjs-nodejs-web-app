import React from 'react'

// Components
import Home from './pages/Home'
import GameDetail from './components/GameDetail/GameDetail'

// Styles
import './App.css'

const App = () => {
  return (
    <>
      <div className='home'>
        <GameDetail />
        {/* Home */}

        <Home />
      </div>
    </>
  )
}

export default App
