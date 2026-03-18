import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const languages: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-switcher">
      {languages.map((l) => (
        <button
          key={l.code}
          className={`lang-btn${lang === l.code ? ' lang-btn--active' : ''}`}
          onClick={() => setLang(l.code)}
          data-cursor-hover="true"
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
