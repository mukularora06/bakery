import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Carrer = () => {
  return (
    <>
    <div className='carrer-main'>
    <Navbar/>
    <h1 className='gift-heading' style={{marginBottom:"50px"}}>WORK WITH US</h1>
    
   
    <p style={{marginBottom:"70px",fontStyle:"bold"}}>
    We’d love to have you join our team! Please use the form below to apply. Feel free to<br/>
     send in your resume even if you don't see the position you're looking for listed.  
    </p>
    
    <form>
        
        <input className='form-control unselected' placeholder=' Name'></input><br/>
        <input className='form-control unselected' placeholder='Email'></input><br/>
        <input className='form-control unselected' placeholder='Phone Number'></input><br/>





        <input style={{height:"200px", textAlign:"top"}} className='form-control unselected' placeholder='Cover Letter'></input><br/>


    </form>

  <button className='btn btn-dark' style={{height:"50px",width:"120px",marginLeft:"600px",marginBottom:"150px"}}>APPLY</button>
  </div>
<Footer/>

    </>
  )
}

export default Carrer