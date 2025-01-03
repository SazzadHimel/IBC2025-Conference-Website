import SubHeader from '../Sub Header/SubHeader.jsx';
import './ContactUs.css';
import drMunimaImage from '../../assets/Dr. Munima Haque.jpg';
import akibImage from '../../assets/Syed Akib Hossain.jpg'; 

const ContactUs = () => {
    return (
        <div>
        <SubHeader title="CONTACT US"/>
        <div className='container space'>
            <div className="contact-details">
                <div className="contact-row">
                    <div className='contact-image'>
                        <img src={drMunimaImage} alt="Dr. Munima Haque" className='contact-image' />
                    </div>
                    <div className="contact-text">
                        <h3>Dr. Munima Haque</h3>
                        <p><strong>Role:</strong> Convener, Biotech Program Director, Associate Professor</p>
                        <p><strong>Department:</strong> Department of Mathematics and Natural Sciences (MNS)</p>
                        <p><strong>School:</strong> School of Data and Sciences (SDS) BRAC University</p>
                        <p><strong>Phone:</strong> +8801775012769</p>
                        <p><strong>Email:</strong> <a href="mailto:munima.haque@BRACU.ac.bd">munima.haque@BRACU.ac.bd</a></p>
                    </div>
                </div>
                <div className='space'></div>
                <div className="contact-row">
                    <div className='contact-image'>
                        <img src={akibImage} alt="Syed Akib Hossain" className='contact-image' />
                    </div>
                    <div className="contact-text">
                        <h3>Syed Akib Hossain</h3>
                        <p><strong>Role:</strong> Lecturer</p>
                        <p><strong>Department:</strong> Department of Mathematics and Natural Sciences (MNS)</p>
                        <p><strong>School:</strong> School of Data and Sciences (SDS) BRAC University</p>
                        <p><strong>Phone:</strong> +8801924929200</p>
                        <p><strong>Email:</strong> <a href="mailto:hossain.akib@BRACU.ac.bd">hossain.akib@BRACU.ac.bd</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;
