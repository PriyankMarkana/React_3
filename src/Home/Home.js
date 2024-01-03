import '../App.css';
import '../media.css';

import Header from './Header.js';
import Banner from './Banner.js';
import Service from './Service.js';
import About_our from './About_our.js';
import Choose from './Choose.js';
import Trust from './Trust.js';
import Number from './Number.js';
import Testimonial from './Testimonial.js';
import Expert from './Expert.js';
import Blog from './Blog.js';
import Want from './Want.js';
import Customer from './Customer.js';
import Footer from './Footer.js';

function Home() {

    return (
      <>
        {/*--------- Header start ------------*/}
        <Header/>
        {/*--------- Header end-------------- */}
  
        {/*--------- slider start----------- */}
        <Banner/>
        {/*--------- slider end----------- */}
  
        {/* ---------service start------- */}
        <Service/>
        {/* ---------service end------- */}
  
        {/*------- About our company start ------*/}
        <About_our/>
        {/* -------About our company end --------*/}
  
        {/* -------why choose us start ----------*/}
        <Choose/>
        {/* -------why choose us end ----------*/}
      
        {/*------- why trust us start -------*/}
        <Trust/>
        {/*------- why trust us end -------*/}
  
        {/*-------- numbering start--------- */}
        <Number/>
        {/*-------- numbering end--------- */}
  
        {/* --------Testimonial start---- */}
       <Testimonial/>
        {/* --------Testimonial end------ */}
  
        {/* -----expert start -------*/}
        <Expert/>
        {/* -----expert end -------*/}
  
        {/*----- blog start ------*/}
        <Blog/>
        {/*----- blog end ------*/}
  
        {/*------ want to work start---- */}
       <Want/>
        {/*------ want to work end---- */}
  
        {/* --------our customer start --------*/}
       <Customer/>
        {/* --------our customer end --------*/}
  
        {/* ------footer start ---------*/}
       <Footer/>
        {/* ------footer end --------*/}
  
      </>
    );
  }
  
  export default Home;