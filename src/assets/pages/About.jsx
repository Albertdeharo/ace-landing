import OurStory from '../components/OurStory/OurStory';
import MissionVision from '../components/MissionVision/MissionVision';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';

import './About.css';

const About = () => {

  return (
    <div className='about-container'>
      <OurStory />
      <MissionVision />
      <Team />
      <Testimonials />
    </div>
  );
};

export default About;
