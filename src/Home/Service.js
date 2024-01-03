import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { TiArrowRight } from "react-icons/ti"; 

import setting from '../images/settings.png';
import cloud from '../images/cloud.png';
import coding from '../images/coding.png';
import digital from '../images/digital-marketing.png';
import app from '../images/app.png';
import analysis from '../images/analysis.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Service() {
    return(
        <section className='service'>
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
                <img src={setting}></img>
                <h5>Web Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={digital}></img>
                <h5>Web Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={analysis}></img>
                <h5>Web Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={cloud}></img>
                <h5>Web Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={coding}></img>
                <h5>Web Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua
                </p>
                <cite><TiArrowRight /></cite><span>Read More</span>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={app}></img>
                <h5>Web Development</h5>
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
export default Service;