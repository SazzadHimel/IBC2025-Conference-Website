import SubHeader from '../Sub Header/SubHeader.jsx';
import './AboutUs.css';
import bracUniversity from '../../assets/Brac_University.png';
import New_Campus2 from '../../assets/New_Campus3.jpg';
import Globe from '../../assets/Globe.png';

const AboutUs = () => {
    return (
        <div>
        <SubHeader title="ABOUT US"/>
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
                        <ul>
                            <li><strong>Environmental Biotechnology:</strong> Exploring biotechnological solutions for waste management, pollution control, and ecosystem restoration.</li>
                            <li><strong>Pharmaceutical Biotechnology:</strong> Advancements in drug development, vaccine research, and biologic therapies.</li>
                            <li><strong>Medical Biotechnology:</strong> Cutting-edge technologies for diagnostics, gene therapies, and precision medicine.</li>
                            <li><strong>Agricultural Biotechnology:</strong> Innovations in crop improvement, pest management, and sustainable farming techniques.</li>
                            <li><strong>Microbial Biotechnology:</strong> Harnessing microorganisms for industrial, medical, and environmental applications.</li>
                            <li><strong>Computational Biology & Bioinformatics:</strong> Leveraging big data, AI, and machine learning for biological research and healthcare.</li>
                            <li><strong>Biosensors and Bioelectronics:</strong> Developing sensor technologies for real-time monitoring of health and environmental parameters.</li>
                            <li><strong>Marine Biotechnology:</strong> Exploring marine resources for bioactive compounds, sustainable aquaculture, and climate change mitigation.</li>
                            <li><strong>Industrial and Food Biotechnology:</strong> Cutting edge research on use of living organisms and their products to improve food and other industrial processes.</li>
                        </ul>
                        <p>
                            In addition to the scientific sessions, participants will have opportunities for networking, collaboration, and sharing of ideas with experts and peers from diverse fields.
                        </p>
                        <p>
                            The conference will culminate with a gala dinner, providing an informal yet enriching setting for continued discussions and relationship-building.
                        </p>
                    </div>
                    <div className="about-row">
                        <div className="conference-details-row">
                            <div>
                                <h3>Objectives of the Conference</h3>
                                <ul>
                                    <li>Provide a Platform for Presenting Cutting-Edge Research</li>
                                    <li>Facilitate Networking and Knowledge Exchange</li>
                                    <li>Promote Interdisciplinary Dialogue</li>
                                    <li>Showcase Biotechnologys Role in Sustainable Development</li>
                                    <li>Strengthen Local and Regional Biotechnology Ecosystems</li>
                                    <li>Explore the Role of Biotechnology in Public Health</li>
                                    <li>Highlight the Potential of Biotechnology in Education and Training</li>
                                    <li>Celebrate Biotechnology Innovations with a Global Perspective</li>
                                    <li>Support Biotechnology Policy Development</li>
                                    <li>Foster Sustainable Practices in Biotechnology</li>
                                </ul>
                                <h3>Goals of the Conference</h3>
                                <ul>
                                    <li>Promote Scientific Collaboration and Innovation</li>
                                    <li>Address Global Challenges</li>
                                    <li>Enhance Knowledge Sharing and Capacity Building</li>
                                    <li>Encourage Industry-Academic Partnerships</li>
                                    <li>Advance Biotechnology for Societal Impact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="about-image-container">
                            <img src={New_Campus2} alt="New Campus" className="about-image" />
                        </div>
                    </div>
                </div>
                <div className='space'></div>
                <div className="about-row">
                    <h2>Our Participants</h2>
                    <p>
                        The Biotechnology International Conference 2025 will attract a diverse range of participants from
                        around the globe, all united by a shared interest in the transformative power of biotechnology to
                        address global challenges in environmental sustainability and health. 
                    </p>
                    <p>
                        The conference will oer an inclusive platform for scientists, researchers, industry professionals, educators, students, and
                        policymakers to engage in meaningful discussions, knowledge exchange, and collaboration. Below are the key categories of participants:
                    </p>
                    <div className="conference-details-row">
                        <ul>
                            <li>Academic Researchers and Scientists</li>
                            <li>Industry Professionals and Entrepreneurs</li>
                            <li>Policymakers and Regulatory Experts</li>
                            <li>Educators and Trainers</li>
                            <li>Students and Early-Career Researchers</li>
                            <li>Innovators and Entrepreneurs</li>
                            <li>Healthcare and Environmental Professionals</li>
                            <li>Media and Journalists</li>
                            <li>Investors and Venture Capitalists</li>
                            <li>General Public and Enthusiasts</li>
                        </ul>
                    </div>
                    <div className="about-image-container">
                        <img src={Globe} alt="Globe" className="globe-image" />
                    </div>
                </div>
                <div className='space'></div>
                <div className="about-details-row">
                    <div>
                        <h2>About BRAC University</h2>
                        <p>
                            BRAC University, established in 2001, is committed to fostering academic excellence and societal impact. 
                            It provides a liberal arts education with a focus on innovation and sustainable solutions.
                        </p>
                    </div>
                </div>
                <div className="about-row">
                    <div className="about-image-container">
                        <img src={bracUniversity} alt="BRAC University Logo" className="about-image" />
                    </div>
                    <div className="about-text">
                        <h3>Vision</h3>
                        <p>
                            To be a leading university of the Global South that reimagines excellence for the future by fostering academic excellence, societal impact, and human flourishing.
                        </p>
                        <p>
                            Building on BRACs experience of seeking solutions to challenges posed by extreme poverty, BRACU hopes to instill in its students a commitment to working towards national development and progress.
                        </p>
                        <h3>Mission</h3>
                        <p>
                            To create future leaders who not only achieve academic excellence but also have the know-how and confidence to apply it in the real world; who go on to lead with empathy and ethics, realizing meaningful progress for society.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
