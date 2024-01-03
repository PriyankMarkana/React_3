import Header from '../Home/Header';
import Want from '../Home/Want';
import Choose from '../Home/Choose';

import './Service.css';
import Banner from './Banner';
import Trust from '../Home/Trust';
import Footer from '../Home/Footer';
import Service_detail from './Service_detail';

function Service() {
    return(
       <>
       <Header />
       <Banner/>
       <Service_detail/>
       <Want />
       <Choose/>
       <Trust/>
       <Footer/>
       </>

    );
}
export default Service;