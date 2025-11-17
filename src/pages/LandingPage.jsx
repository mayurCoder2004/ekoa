import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Problems from "../components/Problems";
import Solutions from "../components/Solutions";
import Shop from "../components/Shop";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shop />
      <Mission />
      <Problems />
      <Solutions />
      <AboutSection/>
      <Footer />
    </>
  );
};

export default LandingPage;
