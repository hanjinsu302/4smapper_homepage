import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css'
import smlogo from'../../images/logo/4smapper_logo.png'
const Footer = () => {
  const { t } = useTranslation('footer'); // footer namespace 사용

  return (
    <div className='FooterContainer'>
      <div className='FooterContents'>
        <img src={smlogo} className='footer_smlogo' alt="4SMapper logo" />
        <div className='footer_context'>
          <div className='footer_test'>
            <div className='footer_info_title'>
              <div>
                Address
              </div>
              <div>
                E-Maill
              </div>
              <div>
                Call
              </div>
              <div>
                Fax
              </div>
            </div>
            <div className='footer_info'>
              <div>
              {t('info.adress')}
              </div>
              <div>
                info@4SMapper.com
              </div>
              <div>
                +82 70 8721 4396
              </div>
              <div>
                +82 504 400 4396
              </div>
            </div>
            <div className='footer_link'>
              <div>
                {t('nav.platform')}
              </div>
              <div>
                {t('nav.solution')}
              </div>
              <div>
                {t('nav.products')}
              </div>
              <div>
                {t('nav.about')}
              </div>
            </div>
          </div>
          <div className='footer_line'>
            Copyright © 2025 4S Mapper all right reserved
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
