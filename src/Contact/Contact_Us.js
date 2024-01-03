import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact_Us() {
    return(
        <>
        <section className="contact_us">
            <Container>
                <Row>
                    <Col className='content text-center'>
                        <h6>BLOG & ARTICLE</h6>
                        <h1>Recent Blog</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center content_box'>
                    <Col md={5} className='box mb-4'>
                        <input type='text' placeholder='Your Name'></input>
                    </Col>
                    <Col md={5} className='box mb-4'>
                        <input type='text' placeholder='Your Email'></input>
                    </Col>
                    <Col md={5} className='box mb-4'>
                        <input type='text' placeholder='Your Phone'></input>
                    </Col>
                    <Col md={5} className='box mb-4'>
                        <input type='text' placeholder='Your Subject'></input>
                    </Col>
                    <Col md={10} className='box mb-4'>
                        <textarea placeholder='Enter Message'></textarea>
                    </Col>
                    <Col md={10} className='box'>
                        <span className='btn'>Send Message</span>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default Contact_Us;