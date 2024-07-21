import React from 'react'
import Getwaffle from './Getwaffle'
import Navbar from './Navbar'
import imgw1 from "../images/w1.jpeg"
import imgw2 from "../images/w2.jpeg"
import imgw3 from "../images/w3.jpeg"
import imgw4 from "../images/w4.jpeg"
import imgw5 from "../images/w5.jpeg"
import imgw6 from "../images/w6.jpeg"

const Waffle = () => {
  return (
    <div>
        <Navbar/>
        <Getwaffle img={imgw1} price="Rs200/-"/>
        <Getwaffle img={imgw2} price="Rs300/-"/>
        <Getwaffle img={imgw3} price="Rs300/-"/>
        <Getwaffle img={imgw4} price="Rs300/-"/>
        <Getwaffle img={imgw5} price="Rs300/-"/>
        <Getwaffle img={imgw6} price="Rs300/-"/>
    </div>
  )
}

export default Waffle