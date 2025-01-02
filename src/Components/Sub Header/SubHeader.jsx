
import './SubHeader.css';

// eslint-disable-next-line react/prop-types
const Subheader = ({ title }) => {
    return (
        <div className="subheader">
        <h1>{title}</h1>
        </div>
    );
};

export default Subheader;
