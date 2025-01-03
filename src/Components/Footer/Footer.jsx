import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import BRAC_logo from '../../assets/bracu_logo.png';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-column">
                    <Link to="https://www.bracu.ac.bd/"><img src={BRAC_logo} alt="BRAC-Logo" className="bracu-logo" /></Link>
                    <Link to="/"><img src={logo} alt="Event Logo" className="event-logo" /></Link>
                </div>
                <div className="footer-column">
                    <p>
                        <strong>BRAC University Permanent Campus</strong>
                        <br />
                        Merul Badda, Dhaka, Bangladesh.
                    </p>
                </div>
                <div className="footer-column socials-column">
                    <p><strong>Connect with us:</strong></p>
                    <div className="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Your Event. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
