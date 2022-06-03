import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid px-5 py-1">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ps-250" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto justify-content-between mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink to="/" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart(0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header
