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
            <img src={logo} alt="Logo" className="logo" />
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about-us">ABOUT US</a></li>
                    <li><a href="/abstract">ABSTRACT</a></li>
                    <li><a href="/organizers">ORGANIZERS</a></li>
                    <li><a href="/venue">VENUE</a></li>
                    <li><a href="/contact-us">CONTACT US</a></li>
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
