import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import asset6 from '../images/asset 6.png';

function Trust() {
    return(
        <section className='trust'>
        <Container>
          <Row xs={1} md={1} lg={2}>
            <Col>
              <div className='content'>
                <h6>WHY TRUST US?</h6>
                <h1>Achieve Digital Transformation For Your Retail Business Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='grid'>
                  <p>Protect your Business<span></span></p>
                  <p>Network Security<span></span></p>
                  <p>Data Security<span></span></p>
                  <p>Small Business Owners<span></span></p>
                  <p>Running your Business<span></span></p>
                  <p>Network Monitoring<span></span></p>
                </div>
              </div>
            </Col>
            <Col>
              <img src={asset6} className='w-100'></img>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Trust;