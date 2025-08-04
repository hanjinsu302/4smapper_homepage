import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css'
import contactbg from '../../images/contact/contact_bg.png'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  const { t } = useTranslation('contact'); // Contact namespace 사용
  const descriptionLines = t('description', { returnObjects: true }); // 배열 반환 옵션

  return (
    <>
    <Header/>
    <div className='Header_Block'></div>
        <div className='Contact_Container'>
                <img className='Contact_bg' src={contactbg} />
            <div className='Contact_Contents'>
                <div className='Contact_Content'>
                    <div className='Contact_Info'>
                        <div className='Contact_Header'>
                            <div className='spot'>
                            </div>
                            Contact
                        </div>
                        <div className='Contact_Title'>{t('title')}</div>
                        <div className='Contact_Description'>
                            {descriptionLines.map((line, idx) => (
                            <p key={idx}>{line}</p>
                            ))}
                        </div>
                    </div>
                    <div className='Contact_Form'>
                        <div className='Nameform'>
                            <label>{t('form_name')}</label>
                            <div className='Namefield'></div>
                        </div>
                        <div className='Nameform'>
                            <label>{t('form_email')}</label>
                            <div className='Namefield'></div>
                        </div>
                        <div className='Messageform'>
                            <label>{t('form_message')}</label>
                            <div className='Messagefield'></div>
                        </div>
                        <div className='SendBtn'>{t('form_send')}</div>
                    </div>
                </div>
            </div>
        </div>

      
    <Footer/>
    </>
    
  );
};

export default Contact;
