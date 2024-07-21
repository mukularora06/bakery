import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <div className='contact-main'>
    <Navbar/>
    <h1 className='gift-heading' style={{marginBottom:"50px"}}>CONTACT US</h1>
    
   
    <p style={{marginBottom:"70px"}}>Send us a message and we’ll get back to you as soon as possible. You can also reach us<br/> 
    by phone at 8437609222. Looking forward to hearing from you!</p>
    
    <form>
        
        <input className='form-control unselected' placeholder=' Name'></input><br/>
        <input className='form-control unselected' placeholder='Email'></input><br/>
        <input className='form-control unselected' placeholder='Phone Number'></input><br/>
<select className="form-control unselected " placeholder='Select amount' aria-describedby="physical-amount-error">
            <option value="" selected="" disabled="">What are you getting in touch about?</option>
            <option value="RS100">General Inquiry</option>
            <option value="RS100">Press Inquiry</option>
         
        </select><br/>




        <input style={{height:"200px", textAlign:"top"}} className='form-control unselected' placeholder='Your Message'></input><br/>


    </form>

  <button className='btn btn-dark' style={{height:"50px",width:"120px",marginLeft:"600px",marginBottom:"150px"}}>SEND</button>
  </div>
<Footer/>
    </>
  )
}

export default Contact