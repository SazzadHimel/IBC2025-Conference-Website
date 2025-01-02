import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/About Us/AboutUs';
import Abstract from './Components/Abstract/Abstract';
import Organizers from './Components/Organizers/Organiters';
import Venue from './Components/Venue/Venue';
import ContactUs from './Components/Contact Us/ContactUs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  )
}

export default App