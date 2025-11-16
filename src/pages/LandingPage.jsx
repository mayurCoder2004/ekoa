import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Problems from "../components/Problems";
import Solutions from "../components/Solutions";
import RevenueSources from "../components/RevenueSources";
import RevenueGrowth from "../components/RevenueGrowth";
import ProfitGrowth from "../components/ProfitGrowth";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Problems />
      <Solutions />
      <RevenueSources />
      <RevenueGrowth />
      <ProfitGrowth />
      <Footer />
    </>
  );
};

export default LandingPage;
