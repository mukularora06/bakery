import React from 'react'
// import "./giftcards.css"
import Navbar from './Navbar'
import Footer from './Footer'
import { height } from '@mui/system'
const Giftcards = () => {
  return (
    <>
    <div className='giftcards-main'>
    <Navbar/>
    <h1 className='gift-heading'>Gift Cards</h1>
    <div className='button'>
    <button id='btn' className='btn btn-success' style={{height:"50px",marginLeft:"-3px"}}>PHYSICAL GIFT CARDS</button>
    <button id='btn' className='btn btn-dark' style={{height:"50px"}}>DIGITAL GIFT CARDS</button>
    </div>
    <h3 style={{fontSize:"50px"}}>PHYSICAL GIFT CARDS</h3><br/>
    <p>Your gift card will be mailed to the address indicated on the form below within 1-2<br/>
         business days. The gift card will never expire and is simple to redeem—just present<br/>
          after dining.</p><br/>
    
    <form>
        <select className="form-control unselected " placeholder='Select amount' aria-describedby="physical-amount-error">
            <option value="" selected="" disabled="">Select Amount</option>
            <option value="RS100">RS100</option>
            <option value="RS100">RS200</option>
            <option value="RS100">RS300</option>
            <option value="RS100">RS400</option>
            <option value="RS100">RS500</option>
        </select><br/>
        <input className='form-control unselected' placeholder='Recipients Name'></input><br/>
        <input className='form-control unselected' placeholder='Recipients Street Address 1'></input><br/>
        <input className='form-control unselected' placeholder='Recipients Street Address 2'></input><br/>
        <input className='form-control unselected' placeholder='City'></input><br/>
        <input className='form-control unselected' placeholder='State'></input><br/>
        <input className='form-control unselected' placeholder='Pincode'></input><br/><br/>
        <input className='form-control unselected' placeholder='Your Name'></input><br/>
        <input style={{height:"200px", textAlign:"top"}} className='form-control unselected' placeholder='Your Message'></input><br/>
    </form>

    <button className='btn btn-dark' style={{marginLeft:"560px",height:"50px",width:"200px",marginBottom:"150px",marginTop:"30px"} }>ADD TO CART</button>
    {/* </div> */}
    </div>
    <Footer/>
   
    </>
  )
}

export default Giftcards