import React from 'react'

import "./index.scss"
import { useState } from 'react'

const Navbar2 = () => {

    const [active, setActive] = useState(true)
    const [modal, setModal] = useState(true)

    const handleClick = (e) =>{
        setActive(!active)
    
    }

    const handlemodal = (e) =>{
        if (modal ===true) {
            setModal(false)
        }
        else{
            setModal(true)
        }
    }


  return (
    <>
    <nav>
        <div className="logo">
            <h2>PULSE</h2>
        </div>
        <ul className='navbar-links'>
            <li className='Home'><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Restauramty</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Contact</a></li>
        </ul>

        <div className="navbarPhone">
            <p><span>Reservations</span> 652-345 3222 11</p>
        </div>

        <div className='hamburger' onClick={(e)=>{handleClick(e)}}>
            <button>bars</button>
        </div>

        <div className='modalBtn'>

            <button onClick={(e)=>{handlemodal(e)}}>modal</button>
        </div>


    </nav>

    <div className={`sidebar ${active ? 'active' : ''}`}>
        <ul className='navbar-links'>
                <li className='Home'><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Restauramty</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
            </ul>
    </div>

    <div className={`modal ${modal ? "active" : ""}`}>

    </div>


    
    
    </>
  )
}

export default Navbar2
