import React from 'react'
import Router from './Router'
import "./App.css"

function Retrieve() {
  return (
    <div  className='main'>
       <Router />
       <div className='addinfo'>
       <h3>Retrieve Information</h3>
      <div className='re'>
      
      
      <input type='text'/> <button className='button'>Find</button>
      </div>




       </div>
     
    </div>
  )
}

export default Retrieve
