import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import asset10 from '../images/asset 10.jpeg';
import asset11 from '../images/asset 11.jpeg';
import asset12 from '../images/asset 12.jpeg';
import asset13 from '../images/asset 13.jpeg';

import { FaLinkedinIn} from "react-icons/fa";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";

function Expert(){
    return(
        <section className='expert'>
        <Container>
          <Row>
            <Col className='content text-center'>
              <h6>TEAM MEMBER</h6>
              <h1>Expert Team</h1>
            </Col>
          </Row>
          <Row className='text-center' xs={1} md={2} lg={4}>
            <Col>
              <div className='team'>
                <img src={asset10} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Ava Farrington</p>
                <span className='post'>Founder, CEO</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset11} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Kevin Haley</p>
                <span className='post'>Co-Founder, CTO</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset12} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Alishia Fulton</p>
                <span className='post'>Chief Creative Officer</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset13} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Lucas Martinez</p>
                <span className='post'>Creative Director</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Expert;