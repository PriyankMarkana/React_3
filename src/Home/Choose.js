import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import asset5 from '../images/asset 5.png';

function Choose() {
    return(
        <section className='choose'>
        <Container>
          <Row xs={1} md={1} lg={2}>
            <Col>
              <img src={asset5} className='w-100'></img>
            </Col>
            <Col>
              <div className='content'>
                <h6>WHY CHOOSE US?</h6>
                <h1>Safeguard Your Brand with Cyber Security and IT Solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='grid'>
                  <p>Remote IT Assistance<span></span></p>
                  <p>Cloud Services<span></span></p>
                  <p>Managed IT Service<span></span></p>
                  <p>IT Security Services<span></span></p>
                  <p>Practice IT Management<span></span></p>
                  <p>Solving IT Problems<span></span></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Choose;