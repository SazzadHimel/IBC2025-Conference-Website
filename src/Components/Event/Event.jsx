import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SubHeader from '../Sub Header/SubHeader';
import './Event.css';

const Event = ({ showSubHeader = true }) => {
    const dates = [
        {
            title: "Online abstract submission starts",
            date: new Date("January 1, 2025 00:00:00"),
        },
        {
            title: "Online abstract submission closes",
            date: new Date("February 28, 2025 23:59:59"),
        },
        {
            title: "Abstract acceptance decision",
            date: new Date("March 25, 2025 23:59:59"),
        },
    ];

    const [timeLeft, setTimeLeft] = useState([]);

    const calculateTimeLeft = () => {
        const now = new Date();
        return dates.map(({ title, date }) => {
            const difference = date - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
                return { title, days, hours, minutes, seconds, date: `(${formattedDate})` };
            } else {
                return { title, message: "Passed Away" };
            }
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    });

    return (
        <div>
            {showSubHeader && <SubHeader title="Events" />}
            <div className="container space">
                <div className="event-container">
                    <h2>Important Dates</h2>
                    <ul>
                        {timeLeft.map((event, index) => (
                            <li key={index} className="event-item">
                                <div className="event-row">
                                    <h3>{event.title} {event.date}</h3>
                                </div>
                                {event.message ? (
                                    <p>{event.message}</p>
                                ) : (
                                    <p>
                                        {event.days} days, {event.hours} hours, {event.minutes} minutes,{" "}
                                        {event.seconds} seconds remaining
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Event.propTypes = {
    showSubHeader: PropTypes.bool,
};

Event.defaultProps = {
    showSubHeader: true,
};

export default Event;
