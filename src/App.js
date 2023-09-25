import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroImageAndText from './Components/HeroImageAndText';
import Quote from './Components/Quote';
import Services from './Components/Services';
import Sidebar from './Components/Sidebar';
import Stripe from './Components/Stripe';
import Technologies from './Components/Technologies';
import Testimonials from './Components/Testimonials';
import WhyUs from './Components/WhyUs';
import { ContactForm } from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';
import Strip from './Components/Strip/Strip';

function App() {
  return (
    <div className="main-container">
      {/* <Strip/> */}
      <Sidebar/>
      
      <Stripe/>
      <Header/>
      <hr/>
      <HeroImageAndText/>
      <Services/>
      <WhyUs/>
      <Technologies/>
      <Testimonials/>
      <Quote/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
