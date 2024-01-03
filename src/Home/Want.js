import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Want() {
    return(
        <section className='work'>
        <Container>
          <Row className='text-center' xs={1}>
            <Col>
              <div className='content'>
                <h6>WANT TO WORK WITH US?</h6>
                <h1>Digitally Transform & Grow Your Business</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud consectetur voluptatem accusantium doloremque adipiscing elit.
                </p>
                <div className='button'>
                  <span className='our sm-w-100'>Call Up</span>
                  <span className='cnt'>Contact Us</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Want;