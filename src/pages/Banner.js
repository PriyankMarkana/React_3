import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return (
        <>
            <section className="Banner">
                <Container>
                    <Row>
                        <Col className='align-items-center'>
                            <div className="content text-center">
                                <h2>Our Team</h2>
                                <ul className='d-flex justify-content-center'>
                                    <li><a>Home</a></li>
                                    <li className='li'><a>Team</a></li>
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