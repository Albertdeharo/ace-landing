import { useTranslation } from './../../../TranslationContext';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { translate } = useTranslation();

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1 className="privacy-title">{translate('privacy_title')}</h1>
        <p className="privacy-updated">{translate('privacy_updated')}</p>

        <div className="privacy-content">
          <h2>{translate('privacy_h2_1')}</h2>
          <p>{translate('privacy_p_1')}</p>

          <h2>{translate('privacy_h2_2')}</h2>
          <p>{translate('privacy_p_2_1')}</p>
          <ul>
            <li>{translate('privacy_li_2_1')}</li>
            <li>{translate('privacy_li_2_2')}</li>
            <li>{translate('privacy_li_2_3')}</li>
          </ul>
          <p>{translate('privacy_p_2_2')}</p>

          <h2>{translate('privacy_h2_3')}</h2>
          <p>{translate('privacy_p_3')}</p>

          <h2>{translate('privacy_h2_4')}</h2>
          <p>{translate('privacy_p_4')}</p>

          <h2>{translate('privacy_h2_5')}</h2>
          <p>{translate('privacy_p_5')}</p>

          <h2>{translate('privacy_h2_6')}</h2>
          <p>{translate('privacy_p_6_1')}</p>
          <ul>
            <li><strong>{translate('privacy_li_6_1').split(':')[0]}:</strong> {translate('privacy_li_6_1').split(':')[1]}</li>
            <li><strong>{translate('privacy_li_6_2').split(':')[0]}:</strong> {translate('privacy_li_6_2').split(':')[1]}</li>
            <li><strong>{translate('privacy_li_6_3').split(':')[0]}:</strong> {translate('privacy_li_6_3').split(':')[1]}</li>
            <li><strong>{translate('privacy_li_6_4').split(':')[0]}:</strong> {translate('privacy_li_6_4').split(':')[1]}</li>
          </ul>
          <p>{translate('privacy_p_6_2')}</p>

          <h2>{translate('privacy_h2_7')}</h2>
          <p>{translate('privacy_p_7')}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;