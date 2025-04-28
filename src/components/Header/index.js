import logo from "../../assets/Group 24.png";
const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="MobiusEngine" className="main-logo" />
            <div className="header-items">
                <a href="#home" className="header-item">Home</a>
                <a href="#about" className="header-item">About Us</a>
                <a href="#plans" className="header-item">Plans</a>
                <a href="#testimonials" className="header-item">Testimonials</a>
                <a href="Privacy Policy" className="header-item">Privacy Policy</a>
                <div className="dropdown">
                    <button className="dropdown-button">More<span style={{fontSize: "0.7em"}}>▼</span></button>
                    <div className="dropdown-content">
                        <a href="#contact" className="header-item">ContactUs</a>
                        <a href="#blog" className="header-item">Blog</a>
                        <a href="#faq" className="header-item">FAQ</a>
                    </div>
                </div>
            </div>
            <button className="button">Get Started</button>
        </div>
    )
}

export default Header;