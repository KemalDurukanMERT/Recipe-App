import React from 'react'
import {Outlet,Navigate} from "react-router-dom"

const PrivateRouter = () => {
  
  return (
    <div>
    { sessionStorage.getItem("user") ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter