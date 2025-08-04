import React from 'react';
import { useTranslation } from 'react-i18next';
import './Main.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import mainbanner from '../../images/main/Main_Banner.png';
import mainbanner2 from '../../images/main/Main_banner_2.png';
import maininfo1 from '../../images/main/Main_info_img_1.png';
import mainplatformimg1 from '../../images/main/Main_platform_img1.png';
import mainplatformimg2 from '../../images/main/Main_platform_img2.png';
import mainplatformimg3 from '../../images/main/Main_platform_img3.png';
import mainplatformimg4 from '../../images/main/Main_platform_img4.png';
import main_cfsm from '../../images/main/Main_cfsm.png';
import main_3d from '../../images/main/Main_3d.png';
import main_hd from '../../images/main/Main_hd.png';
import main_auto from '../../images/main/Main_auto.png';
import Main_Hard_img from '../../images/main/Main_Hard_img.png';
import Main_Soft_img from '../../images/main/Main_Soft_img.png';
import SHARE_Logo from '../../images/main/Logo/SHARE_Logo.png';
import CHCNAV_Logo from '../../images/main/Logo/CHCNAV_Logo.png';
import beyless_Logo from '../../images/main/Logo/beyless_Logo.png';
import DJI_Logo from '../../images/main/Logo/DJI_Logo.png';
import FIXAR_Logo from '../../images/main/Logo/FIXAR_Logo.png';
import Singular_Logo from '../../images/main/Logo/Singular_Logo.png';
import RIEBO_Logo from '../../images/main/Logo/RIEBO_Logo.png';
import TUNDRA_Logo from '../../images/main/Logo/TUNDRA_Logo.png';


const Main = () => {
  const { t } = useTranslation('Main'); // Main namespace 사용
  const logos = [SHARE_Logo, CHCNAV_Logo, beyless_Logo, DJI_Logo, FIXAR_Logo, Singular_Logo,RIEBO_Logo,TUNDRA_Logo];
  

  return (
    <>
    <Header/>
        <div className='Main_Section'>
          <img className='main_banner_img' src={mainbanner}/>
          <div className='main_banner_info'>
            <div className='main_banner_info_main'>Capture Collect Clear</div>
            <div className='main_banner_info_sub'>Smart Future with 4S Mapper</div>
          </div>
        </div>
        <div className='Main_info_section'>
          <div className='Main_info_section_container'>
            OUR CORE THING
            <img src={maininfo1} className='Main_info_img_1'/>
            <div className='Main_info_title'>WE TAKE PICTURES FROM ABOVE</div>
            <div className='Main_info_sub'>We photograph the road with a drone. Then, we use artificial intelligence to make the information we want.
            Our goal is to use this information to obtain accurate data on the road.</div>
            <div className='Main_info_sub2'>About Us</div>
          </div>
        </div>
        <div className='Main_info_section2'>
          <div className='Main_info_section2_contents'>
            <div>Platform</div>
              <div className='Main_info_section2_box'>
                <img className='Main_info_section2_box_img' src={mainplatformimg1}/>
                <div className='Main_info_section2_info_box'>
                  <div className='Main_info_section2_info_box_title'
                  >DaaS: Drone as a Service</div>
                  <div className='Main_info_section2_info_box_sub'>Provides 3D and Pano from drone images that are used for building spatial information in a form of URL for easier access to analyses and reports.</div>
                  <div className='Main_info_section2_info_box_more'>More 〉</div>
                </div>

              </div>
              <div className='Main_info_section2_box'>
                <img className='Main_info_section2_box_img' src={mainplatformimg2}/>
                <div className='Main_info_section2_info_box'>
                  <div className='Main_info_section2_info_box_title'
                  >DTM</div>
                  <div className='Main_info_section2_info_box_sub'>Provides novel solutions of aerial, water surface & ground surveying with drone’s AI brain and eyes.Drone images become more valuable with data science technology.</div>
                  <div className='Main_info_section2_info_box_more'>More 〉</div>
                </div>
              </div>
              <div className='Main_info_section2_box'>
                <div className='Main_info_section2_info_box'>
                  <div className='Main_info_section2_info_box_title'
                  >DaaS: Drone as a Service</div>
                  <div className='Main_info_section2_info_box_sub'>Provides 3D and Pano from drone images that are used for building spatial information in a form of URL for easier access to analyses and reports.</div>
                  <div className='Main_info_section2_info_box_more'>More 〉</div>
                </div>
                <img className='Main_info_section2_box_img' src={mainplatformimg3}/>

              </div>
              <div className='Main_info_section2_box'>
                <div className='Main_info_section2_info_box'>
                  <div className='Main_info_section2_info_box_title'
                  >DaaS: Drone as a Service</div>
                  <div className='Main_info_section2_info_box_sub'>Provides 3D and Pano from drone images that are used for building spatial information in a form of URL for easier access to analyses and reports.</div>
                  <div className='Main_info_section2_info_box_more'>More 〉</div>
                </div>
                <img className='Main_info_section2_box_img' src={mainplatformimg4}/>

              </div>
          </div>
          <div className='Main_info_section3'>
            <div className='Main_info_section3_contents'>
              <div>Solution</div>
              <div className='Main_info_section3_box'>
                <div className='Main_info_section3_box_content1'>
                  <div className='Main_info_section3_box_title'>CfSM (Car-free Street Mapping)</div>
                  <div className='Main_info_section3_box_sub'>Removes car images on the road using the deep learning technique and drone-taken images.</div>
                  <div className='Main_info_section3_box_img_box'>
                    <img className='Main_info_section3_box_img' src={main_cfsm} />
                  </div>
                  
                </div>
                <div className='Main_info_section3_box_content2'>
                <div className='Main_info_section3_box_title_2'>3D Modeling</div>
                  <div className='Main_info_section3_box_sub_2'>Creates 2.5D to 3D models from drone-taken images using multi-directional cameras.</div>
                  <div className='Main_info_section3_box_img_box'>
                    <img className='Main_info_section3_box_img' src={main_3d} />
                  </div>
                </div>
              </div>
              <div className='Main_info_section3_box'>
               
                <div className='Main_info_section3_box_content2'>
                <div className='Main_info_section3_box_img_box'>
                    <img className='Main_info_section3_box_img' src={main_hd} />
                  </div>
                <div className='Main_info_section3_box_title_d'>HD Safety Map</div>
                  <div className='Main_info_section3_box_sub_d'>CGenerates simulation-ready data for autonomous vehicles by extracting crosswalks, center lines, and stop lines from real drone images.</div>
                </div>
                <div className='Main_info_section3_box_content1'>
                <div className='Main_info_section3_box_img_box'>
                    <img className='Main_info_section3_box_img' src={main_auto} />
                  </div>
                  <div className='Main_info_section3_box_title_2_d'>Automatic Data Processing</div>
                  <div className='Main_info_section3_box_sub_2_d'>Automates the data processing steps using distributed Node-based architecture.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Main_info_section4'>
        <img className='Main_info_section4_box_img' src={Main_Soft_img} />
        <img className='Main_info_section4_box_img' src={Main_Hard_img} />
        

        </div>
        <div className='Main_info_section5'>
      <div className='Main_info_section5_contents_title'>Partners with us</div>
      <div className='Main__info_section5_img_contents'>
        <div className='logo-slider'>
          <div className='logo-track'>
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className='logo-item'>
                <img src={logo} alt={`partner-${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        <div className='Main_info_section6'>
          <img className='main_banner_img' src={mainbanner2}/>
          <div className='Main_info_section6_contents'>
            <div className='Main_info_section6_contents_title'>Automate road maintenance with 4S Mapper and build a safer city</div>
            <div className='Main_info_section6_contents_sub'>CONTACT</div>
          </div>
        </div>
    <Footer/>
    </>  
  );
};

export default Main;
