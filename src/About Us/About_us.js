import '../App.css';
import About_our from '../Home/About_our';
import Expert from '../Home/Expert';
import Header from '../Home/Header';
import Number from '../Home/Number';
import Want from '../Home/Want';
import Customer from '../Home/Customer';
import '../media.css';
import './About_us.css';
import Footer from '../Home/Footer';
import Banner from './Banner';
import Feature from './Feature';
import Working from './working';

function About_us() {
    return(
        <>
        <Header/>
        <Banner/>
        <Feature/>
        <About_our/>
        <Number/>
        <Expert/>
        <Working/>
        <Want/>
        <Customer/>
        <Footer/>
    
        </>
    );
}
export default About_us;