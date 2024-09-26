import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import MainFeatures from '../components/Features/MainFeatures';
import Gallery from '../components/Gallery/Gallery';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import Parallax from '../components/Parallax/Parallax';

const Home = () => {
  return (
    <div>
      <Banner />
      <MainFeatures />
      <Features />
      <Parallax />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <FAQ />
    </div>
  );
};

export default Home;
