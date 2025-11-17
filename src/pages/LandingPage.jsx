import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Problems from "../components/Problems";
import Solutions from "../components/Solutions";
import RevenueSources from "../components/RevenueSources";
import RevenueGrowth from "../components/RevenueGrowth";
import ProfitGrowth from "../components/ProfitGrowth";
import Shop from "../components/Shop";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Problems />
      <Solutions />
      <Shop />
      <RevenueSources />
      <RevenueGrowth />
      <ProfitGrowth />
      <Footer />
    </>
  );
};

export default LandingPage;
