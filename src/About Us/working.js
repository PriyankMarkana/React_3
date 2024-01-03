import { Container,Col,Row } from "react-bootstrap";

import w from '../images/workprocess-icon-1.png';
import w2 from '../images/workprocess-icon-2.png';
import w3 from '../images/workprocess-icon-3.png';
import w4 from '../images/workprocess-icon-4.png';

function Working() {
    return(
        <>
            <section className="working">
                <Container>
                    <Row>
                        <Col className='content text-center'>
                            <h6>4 STEP WORK PROCESS</h6>
                            <h1>Working Process</h1>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} lg={4}>
                        <Col>
                            <div className="box">
                                <img src={w}></img>
                                <h5>Discover</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt dolore magna aliqua.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="box">
                                <img src={w2}></img>
                                <h5>Development</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt dolore magna aliqua.
                                </p>
                            </div>
                        </Col>
                        <Col>
                             <div className="box">
                                <img src={w3}></img>
                                <h5>Install & Testing</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt dolore magna aliqua.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="box">
                                <img src={w4}></img>
                                <h5>Project Delivery</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt dolore magna aliqua.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Working;