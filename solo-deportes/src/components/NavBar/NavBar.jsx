import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import logo from '../../assets/solodeportes.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-brand" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <Link to='/' className='nav-link active'>
              <li className="nav-item">
                <span className="visually-hidden">(current)</span>
              </li>
            </Link>
            <Link to='/' className="nav-link">
              <li className="nav-item">
                Productos
              </li>
            </Link>
            <Link to='/productos/raquetas' className="nav-link">
              <li className="nav-item">
                Raquetas
              </li>
            </Link>
            <Link to='/productos/pelotas' className="nav-link">
              <li className="nav-item">
                Pelotas
              </li>
            </Link>
            <Link to='/productos/encordados' className="nav-link">
              <li className="nav-item">
                Encordados
              </li>
            </Link>
          </ul>      
        </div>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;
