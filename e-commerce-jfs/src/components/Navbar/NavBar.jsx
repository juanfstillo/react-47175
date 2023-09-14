/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from '../../../src/components/Carrito/Carrito'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import logo from '../../assets/solodeportes.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navegacion = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
        <Link to='/'> {/* Wrap the Navbar.Brand with Link */}
          <Navbar.Brand>
            <Image src={logo} alt="Solo Deportes" />
          </Navbar.Brand>
        </Link>          
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link className='text-secondary text-decoration-none mx-2 mt-2 px-2' to='/productos/futbol'>Futbol</Link>
            <Link className='text-secondary text-decoration-none mx-2 mt-2 px-2' to='/productos/tenis'>Tenis</Link>
            <Link className='text-secondary text-decoration-none mx-2 mt-2 px-2' to='/productos/natacion'>Natacion</Link>
              <NavDropdown className="text-secondary" title="Menu personal" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                <Carrito />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Salir
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );    
}

export default Navegacion