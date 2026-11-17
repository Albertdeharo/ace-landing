import { useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';
import { useTranslation } from '../../../TranslationContext';
import './BlackFridayBar.css';

const CODE = 'ACEBF15';
// shortcut: fecha hardcodeada, eliminar el componente tras la campaña
const END_DATE = new Date('2026-11-29T23:59:59');

const BlackFridayBar = () => {
  const { translate } = useTranslation();
  const [copied, setCopied] = useState(false);

  if (new Date() > END_DATE) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard no disponible: el código sigue visible */
    }
  };

  const label = copied ? translate('bf_copied') : translate('bf_copy');

  return (
    <div className="bf-bar">
      <span className="bf-badge">Black Friday</span>
      <span className="bf-text">{translate('bf_text')}</span>
      <button type="button" className="bf-coupon" onClick={copy} aria-label={`${translate('bf_copy')} ${CODE}`} title={label}>
        <span className="bf-code">{CODE}</span>
        {copied ? <FaCheck aria-hidden="true" /> : <FaRegCopy aria-hidden="true" />}
      </button>
    </div>
  );
};

export default BlackFridayBar;
