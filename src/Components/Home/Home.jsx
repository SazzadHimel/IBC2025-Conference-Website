import Header from '../Header/Header.jsx';
import bracUniversity from '../../assets/Brac_University.png';
import './Home.css';
import Events from '../Event/Event.jsx';

const Home = () => {
    return (
        <div>
        <Header />
        <div className="container space">
            <div className='about-us'>
                <div className="conference-section">
                    <div className="conference-text">
                        <h2>Conference Overview</h2>
                        <p>
                            BRAC University is proud to host the Biotechnology International Conference 2025, a premier event that will bring together leading experts, researchers, and innovators from around the globe to explore the cutting-edge developments in the rapidly advancing field of biotechnology.
                        </p>
                        <p>
                            The conference will take place on June 20-21, 2025, at the state-of-the-art BRAC University Permanent Campus in Merul Badda, Dhaka, Bangladesh.
                        </p>
                        <p>
                            Themed Harnessing Sustainable Environment, Agriculture, and Health, the conference will provide a platform for discussing the transformative potential of biotechnology in addressing global challenges related to environmental protection, health improvement, and sustainable development.
                        </p>
                        <p>
                            It will focus on the latest innovations and practical applications across several critical areas, including:
                        </p>
                    </div>
                </div>
                <div className='space'></div>
                <div className="about-row">
                    <div className="about-image-container">
                        <img src={bracUniversity} alt="BRAC University Logo" className="about-image" />
                    </div>
                    <div className="about-text">
                        <h2>About BRAC University</h2>
                        <p>
                            BRAC University, established in 2001, is committed to fostering academic excellence and societal impact. 
                            It provides a liberal arts education with a focus on innovation and sustainable solutions.
                        </p>
                        <p>
                            Building on BRACs experience of seeking solutions to challenges posed by extreme poverty, BRACU hopes to instill in its students a commitment to working towards national development and progress.
                        </p>
                    </div>
                </div>
            </div>
            <Events showSubHeader={false} />
            <div className="schedule">
                <h2 className="schedule-title">Conference Schedule</h2>
                <div className="schedule-row">
                    <div className="schedule-column">
                        <h3>DAY 1</h3>
                        <ul>
                            <li>Inauguration Ceremony</li>
                            <li>Scientific Session</li>
                            <li>Inauguration of Poster Session</li>
                            <li>Plenary Session</li>
                            <li>Prayer and Lunch Break</li>
                            <li>Scientific Session</li>
                            <li>Tea/Coffee Break</li>
                            <li>Scientific Session</li>
                            <li>Cultural Event</li>
                        </ul>
                    </div>
                    <div className="schedule-column">
                        <h3>DAY 2</h3>
                        <ul>
                            <li>Scientific Session</li>
                            <li>Keynote Session 2 (Interaction with Industry Representatives)</li>
                            <li>Poster Session</li>
                            <li>Scientific Session</li>
                            <li>Prayer and Lunch Break</li>
                            <li>Scientific Session</li>
                            <li>Tea/Coffee Break</li>
                            <li>Scientific Session</li>
                            <li>Award-Giving, Closing Ceremony, and Conference Dinner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;
