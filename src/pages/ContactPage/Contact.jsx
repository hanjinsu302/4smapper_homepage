import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import './Contact.css';
import contactbg from '../../images/contact/contact_bg.png';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  const { t } = useTranslation('contact');
  const descriptionLines = t('description', { returnObjects: true });

  // 입력값 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // 입력 변경 핸들러
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 전송 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_4idrxjp',   // EmailJS Service ID
        'template_x1ubzcp',  // EmailJS Template ID
        formData,
        'vMyiJpFWgakuuVlPC'    // EmailJS Public Key
      )
      .then(
        (result) => {
          alert('메일이 성공적으로 전송되었습니다!');
          setFormData({ name: '', email: '', message: '' }); // 초기화
        },
        (error) => {
          alert('메일 전송에 실패했습니다. 다시 시도해주세요.');
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <div className='Header_Block'></div>
      <div className='Contact_Container'>
        <img className='Contact_bg' src={contactbg} />
        <div className='Contact_Contents'>
          <div className='Contact_Content'>
            <div className='Contact_Info'>
              <div className='Contact_Header'>
                <div className='spot'></div>
                Contact
              </div>
              <div className='Contact_Title'>{t('title')}</div>
              <div className='Contact_Description'>
                {descriptionLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

            {/* 📩 Contact Form */}
            <form className='Contact_Form' onSubmit={handleSubmit}>
              <div className='Nameform'>
                <label>{t('form_name')}</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='Namefield'
                />
              </div>
              <div className='Nameform'>
                <label>{t('form_email')}</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='Namefield'
                />
              </div>
              <div className='Messageform'>
                <label>{t('form_message')}</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='Messagefield'
                />
              </div>
              <button type='submit' className='SendBtn'>
                {t('form_send')}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
