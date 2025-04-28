import './App.css';
// import Header from './components/Header';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Testimonials from './components/Testimonials';
import ChooseUs from "./components/ChooseUs";
import Plans from "./components/Plans";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Testimonials />
      <ChooseUs />
      <Plans />
      <ContactUs />
      {/* <Header /> */}
      <Footer />
    </div>
  );
}

export default App;
