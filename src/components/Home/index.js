import Header from "../Header";
const Home = () => {
    return (
        <div>
            <div className="home-container">
                <Header />
                <div className="home-content-center">
                    <div className="home-sub-container">
                        <div className="home-text-container">
                            <h1 className="home-title">Land job interviews <strong className="title-color">10x</strong> faster</h1>
                            <p className="home-discreption">Custom-built resumes that match your goals, keywords, and <br/> recruiter expectations</p>
                            <button className="button">Get Started &rarr;</button>
                        </div>
                        <div className="home-banner-container">
                            {/* need to design manually this banner for future reference it has been skipped */}
                            <img src={require("../../assets/Group 45.png")} alt="MobiusEngine" className="home-banner" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-section">
                <div class="section-content work-container-flow">
                    <h3 className="work-title">How we work?</h3>
                    <div className="work-container">
                        <div className="work-item">
                            <h4 className="flow-of-work">1</h4>
                            <hr className="small-line"/>
                            <p className="work-process">Submit Intake Form</p>
                        </div>
                        <div className="work-item">
                            <h4 className="flow-of-work">2</h4>
                            <hr className="small-line"/>
                            <p className="work-process">We do the search and curation for list of jobs</p>
                        </div>
                        <div className="work-item">
                            <h4 className="flow-of-work">3</h4>
                            <hr className="small-line"/>
                            <p className="work-process">You approve, we do the tedious part (applying)</p>
                        </div>
                        <div className="work-item">
                            <h4 className="flow-of-work">4</h4>
                            <hr className="small-line"/>
                            <p className="work-process">You get the interviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;