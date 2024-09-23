import OurStory from './../components/OurStory/OurStory';
import MissionVision from './../components/MissionVision/MissionVision';
import Team from './../components/Team/Team';

import { useTranslation } from './../../TranslationContext';

const About = () => {
  const { translate } = useTranslation();

  return (
    <div>
      <h1>{translate('about')}</h1>
      <OurStory />
      <MissionVision />
      <Team />
    </div>
  );
};

export default About;
