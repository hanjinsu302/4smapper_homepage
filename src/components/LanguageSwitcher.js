import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    if (lng !== currentLang) {
      i18n.changeLanguage(lng);
    }
  };

  const getStyle = (lang) => ({
    cursor: 'pointer',
    fontWeight: currentLang === lang ? 'bold' : 'normal',
    color: currentLang === lang ? '#04A1FF' : '#aaa',
  });

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <div onClick={() => changeLanguage('ko')} style={getStyle('ko')}>KOR</div>
      <div style={{ color: '#ccc' }}>|</div>
      <div onClick={() => changeLanguage('en')} style={getStyle('en')}>ENG</div>
    </div>
  );
};

export default LanguageSwitcher;
