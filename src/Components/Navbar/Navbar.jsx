import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import BRAC_logo from '../../assets/bracu_logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <nav className="navbar">
            <Link to="/" onClick={scrollToTop}><img src={logo} alt="Logo" className="event-logo" /></Link>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>HOME</Link></li>
                    <li><Link to="/event" onClick={() => { closeMenu(); scrollToTop(); }}>EVENTS</Link></li>
                    <li><Link to="about-us" onClick={() => { closeMenu(); scrollToTop(); }}>ABOUT US</Link></li>
                    <li><Link to="/abstract" onClick={() => { closeMenu(); scrollToTop(); }}>ABSTRACT</Link></li>
                    <li><Link to="/organizers" onClick={() => { closeMenu(); scrollToTop(); }}>ORGANIZERS</Link></li>
                    <li><Link to="/venue" onClick={() => { closeMenu(); scrollToTop(); }}>VENUE</Link></li>
                    <li><Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}><strong>REGISTRATION</strong></Link></li>
                    <li><Link to="/contact-us" onClick={() => { closeMenu(); scrollToTop(); }}>CONTACT US</Link></li>
                </ul>
            </div>
            <Link to="https://www.bracu.ac.bd/"><img src={BRAC_logo} alt="BRAC-Logo" className="bracu-logo" /></Link>
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <span className="close-icon">✖</span>
                ) : (
                    <div className="bars-icon">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
