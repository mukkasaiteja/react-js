import React from 'react'
import { NavLink } from 'react-router-dom'

function Router() {
  return (
    <div>
        <NavLink className='nav' to='/'>Add New Person</NavLink>
      <NavLink className='nav' to='/Retrieve'>Add Retrieve Information</NavLink>
      
    </div>
  )
}

export default Router
