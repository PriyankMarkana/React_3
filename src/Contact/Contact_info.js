
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact_info() {
    return (
        <>
            <section className="contact_info">
                <Container>
                    <Row>
                        <Col className='content text-center'>
                            <h6>FIND US</h6>
                            <h1>Contact Info</h1>
                        </Col>
                    </Row>
                    <Row className='text-center' xs={1} md={2} lg={3}>
                        <Col>
                            <div className='box'>
                                <h5 className='mb-3'>USA Headquarter</h5>
                                <p>304 NW St Homestead, Florida, Melrose Street,
                                     Water Mill, 76B Overlook Drive Chester, PA 19013, Flemingsburg USA.
                                </p>
                                <a>080 707 555-321</a>
                                <a>demo@example.com</a>
                            </div>
                        </Col>
                        <Col>
                            <div className='box'>
                                <h5 className='mb-3'>New York Office</h5>
                                <p>1540 Pecks Ridge Tilton Rd Flemingsburg, Kentucky(KY), 4104188 Fulton Street Blackwood, NJ 08012, London.
                                </p>
                                <a>080 707 555-321</a>
                                <a>demo@example.com</a>
                            </div>
                        </Col>
                        <Col>
                            <div className='box'>
                                <h5 className='mb-3'>Panama Office</h5>
                                <p>103 Richard Ave Ashville, Ohio, Water Mill,3468 16th Hwy Pangburn, Arkansas(AR), Charolais Ashville, Virginia, Panama.
                                </p>
                                <a>080 707 555-321</a>
                                <a>demo@example.com</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Contact_info;