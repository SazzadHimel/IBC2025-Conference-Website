import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/IBC2025-Conference-Website/"><img src={logo} alt="Logo" className="logo" /></Link>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                <li><Link to="/IBC2025-Conference-Website/">HOME</Link></li>
                <li><Link to="/IBC2025-Conference-Website/about-us">ABOUT US</Link></li>
                <li><Link to="/IBC2025-Conference-Website/abstract">ABSTRACT</Link></li>
                <li><Link to="/IBC2025-Conference-Website/organizers">ORGANIZERS</Link></li>
                <li><Link to="/IBC2025-Conference-Website/venue">VENUE</Link></li>
                <li><Link to="/IBC2025-Conference-Website/contact-us">CONTACT US</Link></li>
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
