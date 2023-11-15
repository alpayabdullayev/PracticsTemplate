import React from 'react'
import { Col, Row } from 'antd';
import "./idnex.scss"

const Navbar = () => {
  return (
    <>
    <nav>
        <Row  justify="space-between" align="center">
      <Col span={4}>
        <div className="logo">
            <h2>PULSE <span>.</span></h2>   
        </div>  
      </Col>  
      <Col span={16} >
        <div className="navbar-links" >
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Restaurant</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>  
      </Col>  
      <Col span={4}>
        <div className="navbar-right">
            <p>
            <span>Reservations</span> <span> 652-345 3222 11</span>    
            </p>    
        </div>  
      </Col>  
    </Row>
    </nav>

    </>
  )
}

export default Navbar
