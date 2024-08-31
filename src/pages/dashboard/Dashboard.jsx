import React from 'react'
import Sidbar from '../../components/Sidbar'
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
    <>
      <h1 className='text-center'>Dashboard</h1>
      <div className="container"  >
        <div className="row">
          <div className="col-md-2 sidebarWrapper">
            <Sidbar />
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard