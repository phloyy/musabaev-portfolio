import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import { useLang } from '../i18n/LanguageContext';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface NLFState {
  name: string;
  service: string;
  description: string;
  contact: string;
  timeline: string;
}

/* ------------------------------------------------------------------ */
/*  AutoWidthInput – inline text input that grows with its value       */
/* ------------------------------------------------------------------ */
function AutoWidthInput({
  value,
  placeholder,
  onChange,
  ariaLabel,
  type = 'text',
}: {
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
  ariaLabel: string;
  type?: string;
}) {
  const mirrorRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState<number>(0);

  const displayText = value || placeholder;

  useEffect(() => {
    if (mirrorRef.current) {
      /* +2px avoids rounding artifacts in some browsers */
      setWidth(Math.max(100, mirrorRef.current.scrollWidth + 2));
    }
  }, [displayText]);

  return (
    <span className="nlf-input-wrapper">
      {/* Hidden mirror span for width measurement */}
      <span ref={mirrorRef} className="nlf-mirror" aria-hidden="true">
        {displayText}
      </span>

      <input
        ref={inputRef}
        type={type}
        className="nlf-inline-input"
        value={value}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        aria-label={ariaLabel}
        style={{ width: `${width}px` }}
        data-cursor-hover="true"
      />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  InlineSelect – styled inline dropdown                              */
/* ------------------------------------------------------------------ */
function InlineSelect({
  value,
  options,
  onChange,
  ariaLabel,
  placeholder,
}: {
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
  ariaLabel: string;
  placeholder: string;
}) {
  const mirrorRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number>(0);
  const selectedLabel = options.find((o) => o.value === value)?.label || '';
  const displayText = selectedLabel || placeholder;

  useEffect(() => {
    if (mirrorRef.current) {
      setWidth(Math.max(100, mirrorRef.current.scrollWidth + 30)); /* +30 for the caret */
    }
  }, [displayText]);

  return (
    <span className="nlf-select-wrapper">
      <span ref={mirrorRef} className="nlf-mirror" aria-hidden="true">
        {displayText}
      </span>

      <select
        className="nlf-inline-select"
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
        aria-label={ariaLabel}
        style={{ width: `${width}px` }}
        data-cursor-hover="true"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Main NLF Component                                                 */
/* ------------------------------------------------------------------ */
export default function NaturalLanguageForm() {
  const { t } = useLang();

  const serviceOptions = [
    { value: 'uiux', label: t('nlf.service.uiux') },
    { value: 'branding', label: t('nlf.service.branding') },
    { value: '3d', label: t('nlf.service.3d') },
    { value: 'web', label: t('nlf.service.web') },
    { value: 'other', label: t('nlf.service.other') },
  ];

  const timelineOptions = [
    { value: 'asap', label: t('nlf.timeline.asap') },
    { value: 'weeks', label: t('nlf.timeline.weeks') },
    { value: 'norush', label: t('nlf.timeline.norush') },
  ];

  const [form, setForm] = useState<NLFState>({
    name: '',
    service: '',
    description: '',
    contact: '',
    timeline: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const update = (field: keyof NLFState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('NLF Payload:', form);
    setIsAnimating(true);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsAnimating(false);
      setForm({ name: '', service: '', description: '', contact: '', timeline: '' });
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="nlf-form" id="nlf-contact-form">
      {/* ---- Success Toast ---- */}
      <div className={`nlf-toast ${submitted ? 'nlf-toast--visible' : ''}`}>
        <span className="nlf-toast-icon">✓</span>
        {t('nlf.success')}
      </div>

      {/* ---- NLF Paragraph ---- */}
      <p className="nlf-paragraph">
        <span className="nlf-static">{t('nlf.greeting')} </span>
        <AutoWidthInput
          value={form.name}
          placeholder={t('nlf.placeholder.name')}
          onChange={update('name')}
          ariaLabel={t('nlf.placeholder.name')}
        />
        <span className="nlf-static">{t('nlf.needPartner')} </span>
        <InlineSelect
          value={form.service}
          options={serviceOptions}
          placeholder={t('nlf.placeholder.service')}
          onChange={update('service')}
          ariaLabel={t('nlf.placeholder.service')}
        />
        <span className="nlf-static">{t('nlf.projectAbout')} </span>
        <AutoWidthInput
          value={form.description}
          placeholder={t('nlf.placeholder.description')}
          onChange={update('description')}
          ariaLabel={t('nlf.placeholder.description')}
        />
        <span className="nlf-static">{t('nlf.reachMe')} </span>
        <AutoWidthInput
          value={form.contact}
          placeholder={t('nlf.placeholder.contact')}
          onChange={update('contact')}
          ariaLabel={t('nlf.placeholder.contact')}
        />
        <span className="nlf-static">{t('nlf.startTime')} </span>
        <InlineSelect
          value={form.timeline}
          options={timelineOptions}
          placeholder={t('nlf.placeholder.timeline')}
          onChange={update('timeline')}
          ariaLabel={t('nlf.placeholder.timeline')}
        />
        <span className="nlf-static">{t('nlf.closing')}</span>
      </p>

      {/* ---- Submit ---- */}
      <button
        type="submit"
        className={`nlf-submit ${isAnimating ? 'nlf-submit--sent' : ''}`}
        data-cursor-hover="true"
      >
        <span className="nlf-submit-text">{t('nlf.submit')}</span>
        <span className="nlf-submit-arrow">→</span>
      </button>
    </form>
  );
}
