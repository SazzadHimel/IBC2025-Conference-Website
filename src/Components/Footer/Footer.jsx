import './Footer.css';
import logo from '../../assets/logo.png';
import BRAC_logo from '../../assets/bracu_logo.png';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-column">
                    <img src={BRAC_logo} alt="BRAC-Logo" className="bracu-logo" />
                    <img src={logo} alt="Event Logo" className="event-logo" />
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
