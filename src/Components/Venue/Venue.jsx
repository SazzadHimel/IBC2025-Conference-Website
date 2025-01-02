import SubHeader from '../Sub Header/SubHeader.jsx';
import './Venue.css';

const Venue = () => {
    return (
        <div>
            <SubHeader title="VENUE"/>
            <div className="container space">
                <div className="venue">
                    <h3>VENUE: BRAC UNIVERSITY PERMANENT CAMPUS</h3>
                    <p>
                        BRAC University New Campus is located at KHA 224, Progati Sarani, Merul Badda, Dhaka 1212.
                        The campus area covers a total land area of 7 acres, with the building spanning 1,700,000 square
                        feet in total. WOHA Designs Pte Ltd., Singapore based world-renowned architectural rm has
                        designed this project. The Campus is a 13-story building with three basements, designed to
                        accommodate around 19,000 students. 
                    </p>
                    <p>
                        It is an environmentally conscious structure, allowing natural light and air to ow freely. Nearly half
                        of the land is dedicated to the building itself, while the remainder is utilized for a water body, lake,
                        plantation, and other features aimed at promoting biodiversity. Lush greenery, both inside and
                        outside, provides shade, temperature control, improved air quality, and aesthetics. Harvested
                        rainwater and a cleansing biotope meet 20% of the campus water demand, especially for
                        waterbodies, vegetation, toilet ushing, and reghting.
                    </p>
                    <p>
                        A quarter of the campus energy demand is met by solar panels on the roof, highlighting the
                        commitment to sustainability. The campus oers state-of-the-art learning facilities, including 123
                        classrooms, 5 lecture theatres, and 105 laboratories. A versatile space for hosting various events,
                        including fairs, conferences, cultural events, and sports.
                    </p>
                </div>
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

export default Venue;
