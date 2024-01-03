import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import asset7 from '../images/asset 7.jpeg';
import asset8 from '../images/asset 8.jpeg';
import asset9 from '../images/asset 9.jpeg';

import { FaStar } from "react-icons/fa";

const size1={
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      576:{
        items:1,
        nav:false,
      },
      768:{
        items:2,
        nav:false,
      },
      992:{
        items:2,
        nav:false,
      },
      1201:{
        items:3,
        nav:false,
      }
    }
  }
  

function Testimonial() {
    return(
        <section className='testimonial text-center'>
        <Container>
        <Row>
            <Col className='content text-center'>
              <h6>OUR TESTIMONIAL</h6>
              <h1>Client Feedback</h1>
            </Col>
          </Row>
          <OwlCarousel className='owl-theme' loop margin={10} nav {...size1} autoplay autoplayTimeout={2000}>
            <div class='item'>
              <div className='icon'>
                <i><FaStar /></i>
                <i><FaStar /></i> 
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div>
                <img src={asset8}></img>
                <h3 className='nm'>Zahra Burnett</h3>
                <span>United States</span>
              </div>
            </div>
            <div class='item'>
              <div className='icon'>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div>
                <img src={asset9}></img>
                <h3 className='nm'>Stevie Wills</h3>
                <span>Germany</span>
              </div>
            </div>
            <div class='item'>
              <div className='icon'>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div>
                <img src={asset7}></img>
                <h3 className='nm'>Saabir al-Obeid</h3>
                <span>Turkey </span>
              </div>
            </div>
          </OwlCarousel>
        </Container>
      </section>
    );
}
export default Testimonial;