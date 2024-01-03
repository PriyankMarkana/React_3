import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import asset2 from '../images/asset 2.png';
import asset3 from '../images/asset 3.png';

function Banner() {
    return(
        <section className="slider">
        <Container>
          <Row>
            <Col className='left text-center text-lg-start' md={12} lg>
              <div className='content'>
                <h1>IT Solutions & Business Services Company</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor magna aliqua, magna aliqua. ipsum is simply
                  dummy text of the printing.
                </p>
                <div className='button'>
                  <span className='our'>Our Service</span>
                  <span className='cnt'>Contact Us</span>
                </div>
              </div>
            </Col>
            <Col className='asset2'>
              <img src={asset2} className='w-100'></img>
            </Col>
          </Row>
        </Container>
        <div className='shap'>
          <img src={asset3} className='w-100'></img>
        </div>
      </section>
    );
}
export default Banner;