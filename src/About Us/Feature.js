import { Container,Col,Row } from "react-bootstrap";

import f from '../images/feature-icon-1.png';
import f2 from '../images/feature-icon-2.png';
import f3 from '../images/feature-icon-3.png';

import { TiArrowRight } from "react-icons/ti";
function Feature() {
    return(
        <>
        <section className="feature">
            <Container>
                <Row className="text-center justify-content-between" xs={1} md={2} lg={3}>
                    <Col>
                      <div className="feature_section">
                        <img src={f} className="mb-4"></img>  
                        <h5 className="mb-3">Flexibility & Responsive</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam
                        </p>
                        <p className="lrn"><span><TiArrowRight /></span>Learn More</p>
                      </div>
                    </Col>
                     <Col>
                        <div className="feature_section">
                            <img src={f2} className="mb-4"></img>  
                            <h5 className="mb-3">Dedicated Teams</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam
                            </p>
                            <p className="lrn"><span><TiArrowRight /></span>Learn More</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="feature_section">
                            <img src={f3} className="mb-4"></img>  
                            <h5 className="mb-3">Focusing on Business</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam
                            </p>
                            <p className="lrn"><span><TiArrowRight /></span>Learn More</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default Feature;