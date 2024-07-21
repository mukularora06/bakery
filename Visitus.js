import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Visitus = () => {
  return (
    <div>
        <Navbar/>
        <h3 className='gift-heading' style={{marginBottom:"50px"}}>HOURS & LOCATION</h3>
        <h3 style={{textDecoration:"underline"}}><pre>Model Town Jalandhar.<br/>Near Jyoti
            Chownk </pre></h3><br/>
        <h3 style={{textDecoration:"underline",textAlign:"center",marginLeft:"0px"}}>BAKERY</h3><br/>
        <h3 style={{textAlign:"center",marginLeft:"0px"}}>DAILY(MINUS-TUESDAY):</h3>
        <h4 style={{textAlign:"center",marginLeft:"0px"}}>8am-3am</h4><br/>
        <h3 style={{textAlign:"center",marginLeft:"0px"}}>TUESDAY:</h3>
        <h4 style={{textAlign:"center",marginLeft:"0px"}}>closed</h4><br/>
        <h3 style={{textDecoration:"underline",textAlign:"center",marginLeft:"0px"}}>ARORA BAKERY</h3><br/>
        <h3 style={{textAlign:"center",marginLeft:"0px"}}>DAILY(MINUS-TUESDAY):</h3>
        <h4 style={{textAlign:"center",marginLeft:"0px"}}>7pm-11pm</h4><br/>
        <h3 style={{textAlign:"center",marginLeft:"0px"}}>TUESDAY:</h3>
        <h4 style={{textAlign:"center",marginLeft:"0px"}}>closed</h4><br/>
    <Footer/>
    </div>
  )
}

export default Visitus