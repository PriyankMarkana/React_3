
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About_us from "./About Us/About_us";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import Team from "./pages/Team";
import Service from "./Service/Service";




function App() {

  return (
    <>
     <Routes>
        <Route index  element={ <Home/> } />
        <Route path="/About" element={ <About_us/> } />
        <Route path="/Contact" element={ <Contact/>} />
        <Route path="/Portfolio" element={ <Portfolio/>} />
        <Route path="/Team" element={ <Team/>} />
        <Route path="/Service" element={ <Service/>} />
      </Routes>
    </>
  );
}

export default App;
