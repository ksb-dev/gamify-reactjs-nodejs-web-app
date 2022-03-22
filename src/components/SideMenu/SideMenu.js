import React from 'react'

// Styles
import './SideMenu.css'

const SideMenu = ({ sideMenu, setCategory }) => {
  const hide = () => {
    sideMenu.current.style.transform = 'translateX(100%)'
  }

  window.onresize = () => {
    if (window.innerWidth > 1025) {
      sideMenu.current.style.transform = 'translateX(100%)'
    }
  }

  const handleClick = value => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    hide()

    if (value === 'popular') setCategory('popular')
    if (value === 'upcoming') setCategory('upcoming')
    if (value === 'new') setCategory('new')
  }

  return (
    <div ref={sideMenu} className='side-menu'>
      <div className='menu'>
        <ul>
          <li className='close' onClick={hide}>
            <i className='fa-solid fa-xmark fa-2x'></i>
          </li>
          <li className='wish'>Wishlist</li>
          <li onClick={() => handleClick('popular')}>popular</li>
          <li onClick={() => handleClick('upcoming')}>upcoming</li>
          <li onClick={() => handleClick('new')}>new</li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
