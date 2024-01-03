import { Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Our_portfolio() {
    return(
        <>
        <section className="our_portfolio">
            <Container>
                <Row>
                    <Col className='content text-center'>
                        <h6>RECENT WORKS</h6>
                        <h1>Our Portfolio</h1>
                    </Col>
                </Row>
                <div className="center mb-5 d-flex justify-content-center  flex-wrap">
                    <span style={{backgroundColor:"#7B68EE",color:'white'}}>All</span>
                    <span>Branding</span>
                    <span>Application</span>
                    <span>Web Design</span>
                    <span>Photography</span>
                </div>
                <Row xs={1} md={2} lg={3}>
                    <Col>
                        <div className="box mb-4">
                            <img src={require('../images/portfolio-1.jpg')} className="w-100 rounded"></img>
                            <div className="rounded mx-3 bg-white p-3">
                                <p>App Store | Social Media</p>
                                <h5>Creative Web Design</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="box mb-4">
                            <img src={require('../images/portfolio-2.jpg')} className="w-100 rounded"></img>
                            <div className="rounded mx-3 bg-white p-3">
                                <p>App Store | Social Media</p>
                                <h5>Creative Web Design</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="box mb-4">
                            <img src={require('../images/portfolio-3.jpg')} className="w-100 rounded"></img>
                            <div className="rounded mx-3 bg-white p-3">
                                <p>App Store | Social Media</p>
                                <h5>Creative Web Design</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="box mb-4">
                            <img src={require('../images/portfolio-4.jpg')} className="w-100 rounded"></img>
                            <div className="rounded mx-3 bg-white p-3">
                                <p>App Store | Social Media</p>
                                <h5>Creative Web Design</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="box mb-4">
                            <img src={require('../images/portfolio-5.jpg')} className="w-100 rounded"></img>
                            <div className="rounded mx-3 bg-white p-3">
                                <p>App Store | Social Media</p>
                                <h5>Creative Web Design</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="box mb-4">
                            <img src={require('../images/portfolio-6.jpg')} className="w-100 rounded"></img>
                            <div className="rounded mx-3 bg-white p-3">
                                <p>App Store | Social Media</p>
                                <h5>Creative Web Design</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default Our_portfolio;