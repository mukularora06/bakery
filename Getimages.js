import React from 'react'

const Getimages = (props) => {
  return (
    <div>
            <div className='boxes' >
                <div className='body-image'><img src={props.img} height="600vh" width="500vh"></img></div>
                <h1>{props.title}</h1>
                <p style={{float:"left"}}>{props.desc}</p>
            </div>
    </div>
  )
}

export default Getimages