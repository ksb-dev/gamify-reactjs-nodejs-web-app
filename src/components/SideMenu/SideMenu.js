import React from 'react'

import './SideMenu.css'

const SideMenu = ({ sideMenu, setCategory }) => {
  const hide = () => {
    sideMenu.current.style.transform = 'translateX(100%)'
  }

  return (
    <div ref={sideMenu} className='sideMenu'>
      <div className='menu'>
        <ul>
          <li className='close' onClick={hide}>
            <i className='fa-solid fa-xmark fa-2x'></i>
          </li>
          <li
            className='list'
            onClick={() => {
              setCategory('popular')
              hide()
            }}
          >
            popular
          </li>
          <li
            className='list'
            onClick={() => {
              setCategory('upcoming')
              hide()
            }}
          >
            upcoming
          </li>
          <li
            className='list'
            onClick={() => {
              setCategory('new')
              hide()
            }}
          >
            new
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
