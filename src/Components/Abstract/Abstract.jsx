import SubHeader from "../Sub Header/SubHeader"
import './Abstract.css';

const Abstract = () => {
    return (
        <div>
        <SubHeader title="ABSTRACT"/>
            <div className="container space">
                <div className="info-section">
                    <div className="info-row">
                        <div className="info-details-row">
                            <div>
                                <h3>Instructions for IBC 2025 Conference Abstract Submission</h3>
                                <p>Thank you for your interest in submitting an abstract to our IBC 2025 conference! To ensure clarity and consistency, please adhere to the following guidelines:</p>
                                <h3>Title:</h3>
                                <ul>
                                    <li><strong>Format: </strong>Bold, centered, 14-point font size.</li>
                                    <li><strong>Content: </strong>Concise and informative, accurately reflecting the research.</li>
                                </ul>
                                <h3>Author(s) and Affiliation(s): </h3>
                                <ul>
                                    <li><strong>Format: </strong>Centered, 10-point font size.</li>
                                    <li><strong>Content: </strong>List all authors with their respective affiliations (university/institution, department).</li>
                                    <li><strong>Content: </strong>Please underline the name of the presenting author.</li>
                                </ul>
                                <h3>Content Structure: </h3>
                                <p>Your abstract should clearly present the following sections:</p>
                                <ul>
                                    <li><strong>Background: </strong>Briefly introduce the context and relevant background information for your research. Highlight the problem or research gap your work addresses. (Approximately 20% of the abstract)</li>
                                    <li><strong>Method: </strong>Describe the methodology employed in your study. Specify the techniques, approaches, or experiments used. (Approximately 25% of the abstract)</li>
                                    <li><strong>Results: </strong>Present the key findings of your research. Include specific data, outcomes, or observations. (Approximately 40% of the abstract)</li>
                                    <li><strong>Conclusions:  </strong>Summarize the main conclusions drawn from your results. Discuss the implications of your findings and their significance in the broader context. (Approximately 15% of the abstract)</li>
                                </ul>
                                <h3>Graphical Abstract (Optional): </h3>
                                <p>A graphical abstract is encouraged to visually represent your research. It should be a clear and concise visual summary of your work, complementing the text.</p>
                                <h3>Keywords: </h3>
                                <p>Mention up to five (5) keywords relevant to the Abstract topic separated by commas.</p>
                                <h3>References: </h3>
                                <p>Write at least two (2) references using the following format guidelines.
                                Reference writing format: Taken from https://libguides.cu-portland.edu/APA_style/references
                                ARTICLES (JOURNAL, MAGAZINE, & NEWSPAPER)</p>
                                <p>The basic format is: </p>
                                <p>Last_name, First_initial. Middle_initial. (Publication Date). Title of article: Subtitle of article. Title of Periodical, vol#(iss#), page-range. https://doi.org/doi.number
                                BOOKS, including eBOOKS & REFERENCE BOOKS</p>
                                <p>The basic format is: </p>
                                <p>Last_name, First_initial. Middle_initial. (Publication Year). Title of book: Subtitle of book. City, State_abbreviation: Publisher.*</p>
                                <p><strong>ONLINE SOURCES</strong></p>
                                <p>The basic format is: </p>
                                <p>Last_name, First_initial. Middle_initial. (Publication Date). Title of source [Description of format, if it is not just a plain webpage]. Retrieved from http://www.URL.com</p>
                                <h3>Formatting Requirements: </h3>
                                <ul>
                                    <li><strong>Length: </strong>Maximum 1 page, including all sections and the graphical abstract (if included).</li>
                                    <li><strong>Margins: </strong>Use regular page margins (e.g., 1 inch on all sides).</li>
                                    <li><strong>Font: </strong>Use a clear and professional font such as Times New Roman, Arial, or Calibri.</li>
                                    <li><strong>Text Size:  </strong>11 or 12 point for the main text.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
                <div className="space"></div>
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