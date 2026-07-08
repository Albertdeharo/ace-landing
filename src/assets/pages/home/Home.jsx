import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import FAQ from "../../components/FAQ/FAQ";
import Parallax from "../../components/Parallax/Parallax";
import HomePricing from "../../components/HomePricing/HomePricing";
import TrustBar from "../../components/TrustBar/TrustBar";
import Sports from "../../components/Sports/Sports";
import SEO from "../../components/SEO/SEO";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <SEO title="Mejora tu agarre" />
      <TrustBar />
      <Banner />
      <HomePricing />
      <Features />
      <Sports />
      <Parallax />
      <HowItWorks />
      <Reviews />
      <FAQ />
    </>
  );
};

export default Home;
