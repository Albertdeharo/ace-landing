import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import Gallery from '../components/Gallery/Gallery';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <FAQ />
    </div>
  );
};

export default Home;
