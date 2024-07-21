import React from 'react'
// import "./getwaffle.css"

const Getwaffle = (props) => {
  return (
    <div className='waffle' style={{width:"50px"}}>
        <img className='rounded-circle' src={props.img} height="250px" width="250px"></img>
        <h2>{props.price}</h2>
    </div>
  )
}

export default Getwaffle