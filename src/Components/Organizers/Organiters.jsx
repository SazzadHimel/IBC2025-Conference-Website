import SubHeader from '../Sub Header/SubHeader.jsx';
import './Organizers.css';

const Organizers = () => {
    return (
        <div>
        <SubHeader title="ORGANIZERS"/>
        <div className="container space">
            <div>
                <div className="organizer">
                    <h3>Department of Mathematics and Natural Sciences (MNS)</h3>
                    <p>
                        The Department of Mathematics and Natural Sciences (MNS) was established as one of the key departments of BRAC University when it started its journey in 2001. 
                        The MNS Department has been providing quality education in basic and applied sciences to the students of different disciplines at BRAC University, including its own programs. 
                        It is actively involved in teaching and research across these disciplines. 
                    </p>
                    <p>
                        The department offers courses in physics, applied physics, chemistry, biology, biotechnology, microbiology, mathematics, statistics, economic geography, and environmental sciences, among others. 
                        Its research programs in life sciences incorporate critical areas of medical, environmental, and plant biotechnology, supported by well-equipped laboratories.
                    </p>
                </div>
                <div className="organizer">
                    <h3>Biotechnology Program</h3>
                    <p>
                        The Biotechnology Program, introduced in Summer 2010, applies scientific and engineering principles to the processing of materials using biological systems to provide goods and services. 
                        Biotechnology is a multi-disciplinary science that integrates fields like biochemistry, microbiology, genetics, and chemical/biochemical engineering.
                    </p>
                    <p>
                        Given the rapid advances in biotechnology and their socio-economic impacts, the program is dedicated to developing trained manpower in this critical field. 
                        The undergraduate program provides students with fundamental knowledge, theoretical understanding, and practical skills in biotechnology, all underpinned by a strong foundation in related physical and biological sciences.
                    </p>
                </div>
                <div className="organizer">
                    <h3>School of Data & Sciences</h3>
                    <p>
                        The School of Data & Sciences at BRAC University is committed to advancing knowledge across scientific disciplines. 
                        It plays a pivotal role in blending education and innovation to address global challenges and create meaningful solutions for sustainable development. 
                        The School supports the Biotechnology Program and other initiatives in their efforts to foster research excellence and societal impact.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Organizers;
