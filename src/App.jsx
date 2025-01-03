import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from './Components/Navbar/Navbar.jsx';
import AboutUs from './Components/About Us/AboutUs.jsx';
import Abstract from './Components/Abstract/Abstract.jsx';
import Organizers from './Components/Organizers/Organiters.jsx';
import Venue from './Components/Venue/Venue.jsx';
import ContactUs from './Components/Contact Us/ContactUs.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Event from './Components/Event/Event.jsx';

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <TransitionGroup className="page-transition-container">
        <CSSTransition key={location.key} timeout={500} classNames="page-transition">
          <div className="page-content">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/event" element={<Event />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/abstract" element={<Abstract />} />
              <Route path="/organizers" element={<Organizers />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/IBC2025-Conference-Website">
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
