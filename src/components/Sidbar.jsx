import React from 'react'
import { NavLink } from "react-router-dom";


function Sidbar(props) {
  return (

    <>
      <ul className="sidebar">
        <li>
     
            <NavLink  style={{ color:'black'}} to="/dashboard">Dashboard</NavLink>
       
        </li>
        <li>
          <NavLink style={{ color:'black'}} className="create" to="/dashboard/create">Create Product</NavLink>
        </li>

      </ul>
    </>
  )
}

export default Sidbar