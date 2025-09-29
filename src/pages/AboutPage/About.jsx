import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import aboutbannerimg from '../../images/about/about_bg.png'
import aboutbanner2img from '../../images/about/about_banner2.png'
import aboutinfoimg from '../../images/about/about_info.png'


const About = () => {
  const { t } = useTranslation('about'); // About namespace 사용
  const timelineData = [
    { id: 1, text: "첫 번째 이벤트" },
    { id: 2, text: "두 번째 이벤트" },
    { id: 3, text: "세 번째 이벤트" },
    { id: 4, text: "네 번째 이벤트" },
    { id: 5, text: "다섯 번째 이벤트" },
  ];
  return (
    <>
    <Header/>
    <div className='Header_Block'></div>
    <div className='Banner'>
        <img className='Banner_img' src={aboutbannerimg}/>
        <div className='about_title'>{t('title')}</div>
      </div>
      <div className='About_Section'>
        <img className='about_info_img' src={aboutinfoimg}/>
        <div className='about_info'>{t('info')}</div>
      
      </div>
      <div className='Banner'>
        <img className='Banner_img' src={aboutbanner2img}/>
        <div className='about_title2'>{t('title2')}</div>
        <div className='about_sub_title2'>{t('sub_title2')}</div>
      </div>
      {/* <div className='Section3'>
      <div className="timeline">
      <div className="line"></div>
      {timelineData.map((item) => (
        <div key={item.id} className="timeline-item">
          <div className="dot"></div>
          <div className="content">{item.text}</div>
        </div>
      ))}
    </div>
        
      </div> */}
        <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="./test.html"
        title="Test HTML"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
    <Footer/>
    </>
    
  );
};

export default About;
