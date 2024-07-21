import React from 'react'
// import "./cake.css"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import Getcake from './Getcake'
import Getimages from './Getimages'
import Navbar from './Navbar'
import img4 from "../images/shake.webp"
import img5 from "../images/chocolate.jpeg" 
import img6 from "../images/cakeeee.webp";
import img7 from "../images/waffle.jpg"
import img8 from "../images/boxes1.jpeg"
import img9 from "../images/donuts.jpeg"
import img10 from "../images/vvv.jpeg"
import img11 from "../images/1.jpg"
import img12 from "../images/2.jpg"
import img13 from "../images/3.jpg"
import img14 from "../images/4.jpg"
import Footer from './Footer'
const Home = () => {
  return (
    
    <div style={{backgroundColor:" bisque"}}>
      <Navbar/>
      
      
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
     {/* ..................... */}
     <div className='ab'>
ARORA BAKERY
     </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<section className='half' style={{backgroundColor:" bisque"}}>
<div className='container' id='center'>
  <div className='row'>
  
    <div className='col-lg-6' id='a'><Getimages  img={img8}  title="VISIT THE BAKERY" desc="Come get your favorites!"></Getimages> </div>
    <div className='col-lg-6' id='b'><Getimages  img={img9} title="DONUTS AFTER DARK" desc="Proudly serving you the freshest donuts and our famous apple fritters.See you soon!"></Getimages> </div>
  </div>
  <div className='container-ba'>
</div>
</div>
</section>
<div className='container-fluid' style={{backgroundColor:" bisque"}}>
  <div className='head'><img className='rounded-circle' src={img10} height="80px" width="80px"></img>  WELCOME  <img className='rounded-circle' src={img10} height="80px" width="80px"></img></div><br/>
  <p className='head-in'>If you happen upon our back door during the daytime, you wouldn’t think much of it. Just<br/>
     a random, non-descript purple door in the parking lot of a supermarket. However, once<br/>
      the sun sets, the back door swings open.<br/>

With it, the sweet smells of sugary summer pour out. Just a few feet away, our<br/>
 world-class bake staff is hard at work frying, proofing and glazing treats for the following day.<br/>
  People from all walks of life line up by the hundreds looking to satisfy their sweet tooth.<br/>


Don’t be shy - step in line and strike up a conversation with the group next to you. Take in <br/>
another beautiful evening on the Vineyard and mull over your options.<br/>

Indulgence is just a few steps away!</p>

</div>
<br/>
<button className='btn btn-danger' style={{marginLeft:"590px",marginBottom:"80px",   width:"200px",height:"50px"}}><a style={{textDecoration:"none",color:"white",fontSize:"20px"}} href='/Visitus'> VISIT US</a></button>
<div  className='container-fluid' width="100%" style={{marginBottom:"60px"}}>
  <div className='row' width="100%">
    
<div className='col-lg-3'><Getcake  title="Cakes"  img={img6} desc="this this this cakes are aviliable here" /></div>
<div className='col-lg-3'><Getcake  title="Shake"  img={img4} desc="this this this shakes are aviliable here"/></div>
<div className='col-lg-3'><Getcake  title="Chocolate"  img={img5} desc="this this this Chocolates are aviliable here"/></div>
<div className='col-lg-3'><Getcake  title="Waffle" img={img7} desc="this this this waffles are aviliable here"/></div>
<div className='col-lg-3 mt-5'><Getcake  title="Waffle" img={img11} desc="this this this waffles are aviliable here"/></div>
<div className='col-lg-3 mt-5'><Getcake  title="Waffle" img={img12} desc="this this this waffles are aviliable here"/></div>
<div className='col-lg-3 mt-5'><Getcake  title="Waffle" img={img13} desc="this this this waffles are aviliable here"/></div>
<div className='col-lg-3 mt-5'><Getcake  title="Waffle" img={img14} desc="this this this waffles are aviliable here"/></div>
</div>
</div>


<Footer/>
    </div>

  )
}

export default Home;