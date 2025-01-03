import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
                    <li><Link to="about-us" onClick={closeMenu}>ABOUT US</Link></li>
                    <li><Link to="/abstract" onClick={closeMenu}>ABSTRACT</Link></li>
                    <li><Link to="/organizers" onClick={closeMenu}>ORGANIZERS</Link></li>
                    <li><Link to="/venue" onClick={closeMenu}>VENUE</Link></li>
                    <li><Link to="/contact-us" onClick={closeMenu}>CONTACT US</Link></li>
                </ul>
            </div>
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
