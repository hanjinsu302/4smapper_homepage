import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink,useLocation } from 'react-router-dom';
import './Header.css';
import LanguageSwitcher from '../LanguageSwitcher';
import smlogo from '../../images/logo/4smapper_logo.png';
import dromiilogo from '../../images/logo/DroMii_logo.png';

const Header = () => {
  const { t } = useTranslation('header');
  const [showHeader, setShowHeader] = useState(true);
  const [bgWhite, setBgWhite] = useState(false);     // 배경 흰색 여부
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isRoot = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤 방향에 따른 헤더 숨김/보임 (기존 기능)
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;

      // '/' 경로에서만 일정 위치부터 배경 흰색 적용
      if (isRoot) {
        if (currentScrollY > 300) {  // 100px 이상 스크롤 시 흰색
          setBgWhite(true);
        } else {
          setBgWhite(false);
        }
      } else {
        // 루트가 아닐 땐 항상 흰색
        setBgWhite(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRoot]);

  return (
    <div className={`HeaderContainer ${showHeader ? '' : 'hide'} ${bgWhite ? 'bg-white' : 'bg-transparent'}`}>
      <div className='HeaderContents'>
        <div className='navbox'>
          <NavLink to="/">
            <img src={smlogo} className='smlogo' alt="4SMapper logo" />
          </NavLink>
        </div>

        <NavLink to="/Platform" className={({ isActive }) => isActive ? 'navbox active-link' : 'navbox'}>
          {t('nav.platform')}
        </NavLink>

        <NavLink to="/Solution" className={({ isActive }) => isActive ? 'navbox active-link' : 'navbox'}>
          {t('nav.solution')}
        </NavLink>

        <NavLink to="/Products" className={({ isActive }) => isActive ? 'navbox active-link' : 'navbox'}>
          {t('nav.products')}
        </NavLink>

        <NavLink to="/About" className={({ isActive }) => isActive ? 'navbox active-link' : 'navbox'}>
          {t('nav.about')}
        </NavLink>

        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'contactbox active-contact' : 'contactbox'}>
          {t('nav.contact')}
        </NavLink>

        <LanguageSwitcher />

        <a href="https://new.dromii.com/" target="_blank" rel="noopener noreferrer">
          <img src={dromiilogo} className="dromiilogo" alt="DroMii logo" />
        </a>
      </div>
    </div>
  );
};

export default Header;

