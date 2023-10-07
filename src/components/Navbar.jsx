import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      
    </button>
    <div className="" id="navbarColor01">
      
      <button className='btn btn-outline-secondary my-2 my-sm-0' onClick={()=> navigate("/create-employee")}>Create Employee</button>
    </div>
  </div>
</nav>
  )
}

export default Navbar