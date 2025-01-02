import SubHeader from "../Sub Header/SubHeader"
import './Abstract.css';

const Abstract = () => {
    return (
        <div>
            <SubHeader title="ABSTRACT"/>
            <div className="container space">
                <div className='abstract'>
                    <div className='abstract-text'>
                        <h1>Submit your abstract here</h1>
                        <p>We are excited to review your ideas and contributions!</p>
                        <button className='btn'>Abstract Submission</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abstract