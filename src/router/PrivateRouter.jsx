import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  return (
    <div>
      {sessionStorage.getItem("user") ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter