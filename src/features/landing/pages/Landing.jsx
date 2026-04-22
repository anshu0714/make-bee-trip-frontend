import Navbar from "../../../components/Navbar";
import AppCTA from "../components/AppCTA";
import ContactForm from "../components/ContactForm";
import Destinations from "../components/Destinations";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import SearchWidget from "../components/SearchWidget";
import Testimonials from "../components/Testimonals";


function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchWidget />
      <Features />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <AppCTA />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Landing;