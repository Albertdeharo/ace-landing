import OurStory from './../components/OurStory/OurStory';
import MissionVision from './../components/MissionVision/MissionVision';
import Team from './../components/Team/Team';
import './About.css';

import { useTranslation } from './../../TranslationContext';

const About = () => {
  const { translate } = useTranslation();

  return (
    <div className='about-container'>
      <OurStory />
      <MissionVision />
      <Team />
    </div>
  );
};

export default About;
