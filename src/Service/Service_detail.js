import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { TiArrowRight } from "react-icons/ti"; 

import s1 from '../images/services-icon-1.png'
import s2 from '../images/services-icon-2.png'
import s3 from '../images/services-icon-3.png'
import s4 from '../images/services-icon-4.png'
import s5 from '../images/services-icon-5.png'
import s6 from '../images/services-icon-6.png'

import 'bootstrap/dist/css/bootstrap.min.css';

function Service_detail() {
    return(
        <section className='service_detail'>
        <Container>
          <Row className='text-center'>
            <Col className='content'>
              <h6>WHAT WE PROVIDE</h6>
              <h1>Our Services</h1>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <div className='box'>
                <img src={s1}></img>
                <h5>IT Consulting</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={s2}></img>
                <h5>Cloud Solutions</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={s3}></img>
                <h5>Managed IT Service</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={s4}></img>
                <h5>Responsive Design</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={s5}></img>
                <h5>Cyber Security</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={s6}></img>
                <h5>Solving IT Problems</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Service_detail;