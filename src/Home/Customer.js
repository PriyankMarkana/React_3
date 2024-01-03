import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import asset17 from '../images/asset 17.png';
import asset18 from '../images/asset 18.png';
import asset19 from '../images/asset 19.png';
import asset20 from '../images/asset 20.png';
import asset21 from '../images/asset 21.png';
import asset22 from '../images/asset 22.png';
import asset23 from '../images/asset 23.png';
import asset24 from '../images/asset 24.png';
import asset25 from '../images/asset 25.png';

function Customer() {
    return(
        <section className='customer'>
        <Container>
          <Row className='text-center'>
            <Col className='content text-center'>
              <h6>TRUSTED BY OVER 1500</h6>
              <h1>Our Customers</h1>
            </Col>
          </Row>
          <Row xs={1} sm={2} md={2} lg={5} xl={5} className='justify-content-center imgs'>
            <Col><img src={asset17} className='w-100' /></Col>
            <Col><img src={asset18} className='w-100' /></Col>
            <Col><img src={asset19} className='w-100' /></Col>
            <Col><img src={asset20} className='w-100' /></Col>
            <Col><img src={asset21} className='w-100' /></Col>
            <Col><img src={asset22} className='w-100' /></Col>
            <Col><img src={asset23} className='w-100' /></Col>
            <Col><img src={asset24} className='w-100' /></Col>
            <Col><img src={asset25} className='w-100' /></Col>
          </Row>
        </Container>
      </section>
    );
}
export default Customer;