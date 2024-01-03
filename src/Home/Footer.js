import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import asset0 from '../images/asset 0.png';

import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { FaLinkedinIn,FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return(
        <section className='footer'>
        <Container>
          <Row className='top'>
            <Col xs={12} md={5} className='px-0'>
              <h4>Sign Up Our Newsletter</h4>
              <p className='offer'>We Offer An Informative Monthly Technology Newsletter - Check It Out.</p>
            </Col>
            <Col xs={12} md={4} className='px-0'>
              <p className='email'>Enter Your Email</p>
            </Col>
            <Col xs={12} md={3} className='p-0'>
              <p className='sub text-end'>Subscribe Now</p>
            </Col>
          </Row>
          <Row className="center">
            <Col xs={12} sm={6} lg={4} md={6}>
              <img src={asset0}></img>
              <p className='rdm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris.</p>
              <div className='icons'>
                <i><RiFacebookFill /></i>
                <i><RiTwitterFill /></i>
                <i><FaYoutube /></i>
                <i><FaLinkedinIn /></i>
              </div>
            </Col>
            <Col className='cnt mb-5' xs={12} sm={6} md={6} lg>
              <h1>Our Service</h1>
              <ul>
                <li>Startup Solutions</li>
                <li>Web Development</li>
                <li>Networking Services</li>
                <li>SEO Optimization</li>
                <li>Apps Development</li>
              </ul>
            </Col>
            <Col className='cnt' xs={12} sm={6} md={6} lg>
              <h1>Useful Links</h1>
              <ul>
                <li>About Us</li>
                <li>Case Study</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </Col>
            <Col className='cnt' xs={12} sm={6} lg={4} md={6}><h1>Our Service</h1>
              <ul>
                <li><i> <FaPhoneAlt /></i>phone</li>
                <li>080 707 555-321</li>
                <li><i><FaEnvelope /></i>Email</li>
                <li>demo@example.com</li>
                <li><i><FaLocationDot /></i>Address</li>
                <li>526 Melrose Street, Water Mill, 11976 New York</li>
              </ul>

            </Col>
          </Row>
          <Row className='bottom py-5' xs={1} lg={2}>
            <Col className=' text-start text-sm-center mb-4'>@ 2023 Techvio - All Rights Reserved.</Col>
            <Col className='text-end text-sm-center mb-3'>
              Terms & Conditions Privacy Policy
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Footer;