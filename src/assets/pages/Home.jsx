import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import FAQ from '../components/FAQ/FAQ';
import Parallax from '../components/Parallax/Parallax';

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Parallax />
      <HowItWorks />
      <FAQ />
    </div>
  );
};

export default Home;
