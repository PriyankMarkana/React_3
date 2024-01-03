import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import asset4 from '../images/asset 4.jpeg';

function About_our() {
    return(
        <section className='about'>
        <Container>
          <Row xs={1} lg={2}>
            <Col>
              <div className='content'>
                <h6>ABOUT OUR COMPANY</h6>
                <h1>Providing Your Business With A Quality IT Service is Our Passion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua enim ad minim
                </p>
                <div className='flex_info'>
                  <div className='d-flex justify-content-between'>
                    <p className='IT'>IT Consulting</p>
                    <span className='pr'>90%</span>
                  </div>
                  <div className='skill'>
                    <div className='sub_skill'></div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='IT'>Cloud Solutions</p>
                    <span className='pr'>75%</span>
                  </div>
                  <div className='skill'>
                    <div className='sub_skill' style={{ width: "75%" }}></div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='IT'>Managed IT Service</p>
                    <span className='pr'>85%</span>
                  </div>
                  <div className='skill'>
                    <div className='sub_skill' style={{ width: "85%" }}></div>
                  </div>
                  <p className='learn'>Learn More</p>
                </div>
              </div>
            </Col>
            <Col>
              <img src={asset4} className='w-100'></img>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default About_our;