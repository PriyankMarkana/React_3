import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import asset10 from '../images/asset 10.jpeg';
import asset11 from '../images/asset 11.jpeg';
import asset12 from '../images/asset 12.jpeg';
import asset13 from '../images/asset 13.jpeg';
import asset14 from '../images/team-5.jpg';
import asset15 from '../images/team-6.jpg';
import asset16 from '../images/team-7.jpg';
import asset17 from '../images/team-8.jpg';

import { FaLinkedinIn} from "react-icons/fa";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";

function Expert(){
    return(
        <section className='expert'>
        <Container>
          <Row className='text-center' xs={1} md={2} lg={4}>
            <Col className='mb-5'>
              <div className='team'>
                <img src={asset10} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Ava Farrington</p>
                <span className='post'>Founder, CEO</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset11} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Kevin Haley</p>
                <span className='post'>Co-Founder, CTO</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset12} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Alishia Fulton</p>
                <span className='post'>Chief Creative Officer</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset13} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Lucas Martinez</p>
                <span className='post'>Creative Director</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset14} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Lucas Martinez</p>
                <span className='post'>Creative Director</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset15} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Lucas Martinez</p>
                <span className='post'>Creative Director</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset16} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Lucas Martinez</p>
                <span className='post'>Creative Director</span>
              </div>
            </Col>
            <Col>
              <div className='team'>
                <img src={asset17} className='w-100'></img>
                <span className='black'></span>
                <div className='icon'>
                  <i><RiFacebookFill /></i>
                  <i><RiTwitterFill /></i>
                  <i><FaLinkedinIn /></i>
                </div>
              </div>
              <div className='cnt'>
                <p>Lucas Martinez</p>
                <span className='post'>Creative Director</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Expert;