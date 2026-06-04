import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import FAQ from '../../components/FAQ/FAQ';
import Parallax from '../../components/Parallax/Parallax';
import HomePricing from '../../components/HomePricing/HomePricing';
import TrustBar from '../../components/TrustBar/TrustBar';

const Home = () => {
  return (
    <>
      <TrustBar />
      <Banner />
      <HomePricing />
      <Features />
      <Parallax />
      <HowItWorks />
      <FAQ />
    </>
  );
};

export default Home;
