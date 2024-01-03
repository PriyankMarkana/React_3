import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Number(){
    return(
        <section className='number'>
        <Container>
          <Row xs={1} md={2} lg={4} className='text-center'>
            <Col>
              <div className='cnt'>
                <h1>23+</h1>
                <h3>Years Helping Business</h3>
              </div>
            </Col>
            <Col>
              <div className='cnt'>
                <h1>250+</h1>
                <h3>Working Employees</h3>
              </div>
            </Col>
            <Col>
              <div className='cnt'>
                <h1>4500+</h1>
                <h3>Complete Projects</h3>
              </div>
            </Col>
            <Col>
              <div className='cnt'>
                <h1>3000+</h1>
                <h3>Happy Customers</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Number;