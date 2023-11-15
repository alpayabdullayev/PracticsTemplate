import React from 'react'
import Navbar2 from '../Navbar2'
import "./index.scss"

const Header = () => {
  return (
<>
    <header id='header'>
        <Navbar2/>
        <div className="sectionTitleContent">
          <h2 className='sectionTitle'>Hygienic Food</h2>
          <p className='sectionTitleDesc'>By Chef Francis Smith</p>
        </div>
    </header>

</>
  )
}

export default Header
