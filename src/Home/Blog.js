import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaUserCircle, FaCalendar} from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";

import asset14 from '../images/asset 14.jpeg';
import asset15 from '../images/asset 15.jpeg';
import asset16 from '../images/asset 16.jpeg';

function Blog(){
    return(
        <section className='blog'>
        <Container>
          <Row>
            <Col className='content text-center'>
              <h6>BLOG & ARTICLE</h6>
              <h1>Recent Blog</h1>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <div className='box'>
                <img src={asset14} className='w-100'></img>
                <div className='content'>
                  <span><i><FaUserCircle /></i>Author</span><span><i><FaCalendar /></i>17 June 2023</span>
                  <h3>Planning for a Safe Return to the Workplace IT Solutions</h3>
                  <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
                  <cite><TiArrowRight /></cite><span>Read More</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={asset15} className='w-100'></img>
                <div className='content'>
                  <span><i><FaUserCircle /></i>Author</span><span><i><FaCalendar /></i>17 June 2023</span>
                  <h3>Planning for a Safe Return to the Workplace IT Solutions</h3>
                  <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
                  <cite><TiArrowRight /></cite><span>Read More</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src={asset16} className='w-100'></img>
                <div className='content'>
                  <span><i><FaUserCircle /></i>Author</span><span><i><FaCalendar /></i>17 June 2023</span>
                  <h3>Planning for a Safe Return to the Workplace IT Solutions</h3>
                  <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
                  <cite><TiArrowRight /></cite><span>Read More</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Blog;