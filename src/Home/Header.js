import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import asset1 from '../images/asset 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className='header'>
        <Container>
          <Row className='justify-content-sm-between'>
            <Col>
              <img src={asset1} alt="" />
            </Col>
            <Col xs lg={9} xl={7} className='text-lg-center p-0'>
              <Navbar expand="lg" className=" p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto bg' />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <NavDropdown title="Home" id="basic-nav-dropdown" className='dp'>
                      <NavDropdown.Item href="#action/1.1"><Link to="/" className='m-0 dp' >Home 1</Link></NavDropdown.Item>
                      <NavDropdown.Item href="#action/1.2">Home 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action/1.3">Home 3</NavDropdown.Item>
                      <NavDropdown.Item href="#action/1.4">Home 4</NavDropdown.Item>
                      <NavDropdown.Item href="#action/1.5">Home 5</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link"><Link className='dp' to="/About">About Us</Link></Nav.Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown" className='dp'>
                      <NavDropdown.Item href="#action/2.1">Service 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action/2.2"><Link to="/Service" className='m-0 dp' >Service 2</Link></NavDropdown.Item>
                      <NavDropdown.Item href="#action/2.3">Services Details</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Portfolio" id="basic-nav-dropdown" className='dp'>
                      <NavDropdown.Item href="#action/3.1"><Link to="/Portfolio" className='m-0 dp' >Portfolio</Link></NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Portfolio Details</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Pages" id="basic-nav-dropdown" className='dp'>
                      <NavDropdown.Item href="#action/4.1">About Us</NavDropdown.Item>
                      <NavDropdown.Item href="#action/4.2"><Link to="/Team" className='m-0 dp' >Team</Link></NavDropdown.Item>
                      <NavDropdown.Item href="#action/4.3">Pricing</NavDropdown.Item>
                      <NavDropdown.Item href="#action/4.3">404 Error</NavDropdown.Item>
                      <NavDropdown.Item href="#action/4.3">FAQ</NavDropdown.Item>
                      <NavDropdown.Item href="#action/4.3">Coming Soon</NavDropdown.Item>
                      <NavDropdown.Item href="#action/4.3">Privacy Policy</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blog" id="basic-nav-dropdown" className='dp'>
                      <NavDropdown.Item href="#action/5.1">Blog Grid</NavDropdown.Item>
                      <NavDropdown.Item href="#action/5.2">Blog Right Slidbar</NavDropdown.Item>
                      <NavDropdown.Item href="#action/5.3">Blog Details</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link"><Link className='dp' to="/Contact">Contact</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col className='text-end d-none d-xl-block'>
              <span className='p'>Get It Support</span>
            </Col>
          </Row>
        </Container>
      </nav>
    );
}
export default Header;