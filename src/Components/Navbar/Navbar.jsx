import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <a href="/IBC2025-Conference-Website/"><img src={logo} alt="Logo" className="logo" /></a>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="/IBC2025-Conference-Website/">HOME</a></li>
                    <li><a href="/IBC2025-Conference-Website/about-us">ABOUT US</a></li>
                    <li><a href="/IBC2025-Conference-Website/abstract">ABSTRACT</a></li>
                    <li><a href="/IBC2025-Conference-Website/organizers">ORGANIZERS</a></li>
                    <li><a href="/IBC2025-Conference-Website/venue">VENUE</a></li>
                    <li><a href="/IBC2025-Conference-Website/contact-us">CONTACT US</a></li>
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
