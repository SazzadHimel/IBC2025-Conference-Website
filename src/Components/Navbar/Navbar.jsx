import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="about-us">ABOUT US</Link></li>
                    <li><Link to="/abstract">ABSTRACT</Link></li>
                    <li><Link to="/organizers">ORGANIZERS</Link></li>
                    <li><Link to="/venue">VENUE</Link></li>
                    <li><Link to="/contact-us">CONTACT US</Link></li>
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
