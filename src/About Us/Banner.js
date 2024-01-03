import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Contact/Contact.css';

function Banner() {
    return (
        <>
            <section className="Banner">
                <Container>
                    <Row>
                        <Col className='align-items-center'>
                            <div className="content text-center">
                                <h2>About Us</h2>
                                <ul className='d-flex justify-content-center'>
                                    <li><a>Home</a></li>
                                    <li className='li'><a>About Us</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Banner;