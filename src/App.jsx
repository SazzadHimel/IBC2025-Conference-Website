import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx'
import AboutUs from './Components/About Us/AboutUs.jsx';
import Abstract from './Components/Abstract/Abstract.jsx';
import Organizers from './Components/Organizers/Organiters.jsx';
import Venue from './Components/Venue/Venue.jsx';
import ContactUs from './Components/Contact Us/ContactUs.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/IBC2025-Conference-Website">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/organizers" element={<Organizers />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App