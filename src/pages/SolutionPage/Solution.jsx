import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import './Solution.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// 이미지 import
import beforeImg from '../../images/solution/CfSM_before.png';
import afterImg from '../../images/solution/CfSM_after.png';
import arrowIcon from '../../images/solution/icon_arrow.png';
import captureImg from '../../images/solution/CfSM_capture.png';
import combineImg from '../../images/solution/CfSM_combine.png';
import processImg from '../../images/solution/CfSM_process.png';
import monitorImg from '../../images/solution/CfSM_monitor.png';
import hdSafetyMapImg from '../../images/solution/hd_safety_map.png';
import automaticDataProcessingGif from '../../images/solution/automatic_data_processing.gif';
import automaticPlatformImg from '../../images/solution/automatic_platfrom.png';
import soultionbannerimg from '../../images/solution/soultionbannerimg.png';


const ThreeDModels = [
  {
    id: 1,
    iframe: (
      <iframe
     
        src="https://sketchfab.com/models/18a444fe6d0348958ded01f846269f81/embed"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
    caption: (
      <p className="model-caption">
        <a
          href="https://sketchfab.com/models/18a444fe6d0348958ded01f846269f81"
          target="_blank"
          rel="noopener noreferrer"
        >
          Surisan-20161123 Simplified 3d Mesh
        </a>
      </p>
    ),
  },
  {
    id: 2,
    iframe: (
      <iframe
     
        src="https://sketchfab.com/models/fedb5948d35b490d9ce0c65f017cb86f/embed"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
    caption: (
      <p className="model-caption">
        <a
          href="https://sketchfab.com/models/fedb5948d35b490d9ce0c65f017cb86f"
          target="_blank"
          rel="noopener noreferrer"
        >
          DJI House 3D Mesh
        </a>
        by{' '}
        <a
          href="https://sketchfab.com/stefano0620"
          target="_blank"
          rel="noopener noreferrer"
        >
          stefano0620
        </a>
      </p>
    ),
  },
  {
    id: 3,
    iframe: (
      <iframe
      
        src="https://sketchfab.com/models/66f365b83324486cb408c622714c2844/embed"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
    caption: (
      <p className="model-caption">
        <a
          href="https://sketchfab.com/models/66f365b83324486cb408c622714c2844"
          target="_blank"
          rel="noopener noreferrer"
        >
          Model Building by Dji with P (3D Mesh)
        </a>
      </p>
    ),
  },
  {
    id: 4,
    iframe: (
      <iframe
      
        src="https://sketchfab.com/models/71f47e1fbd1f48c2833b6b10afa34efe/embed"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    ),
    caption: (
      <p className="model-caption">
        <a
          href="https://sketchfab.com/models/71f47e1fbd1f48c2833b6b10afa34efe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hansei-20161207 Simplified 3d Mesh
        </a>
      </p>
    ),
  },
];

const Solution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation('solution'); // About namespace 사용

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ThreeDModels.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === ThreeDModels.length - 1 ? 0 : prev + 1));
  };


 
  return (
    <>
      <Header />
      <div className='Header_Block'></div>
      <img className='Banner_img' src={soultionbannerimg} />
      <div className="container">
        <div className="solution_section1">
          <div className="solution_section1_title">
            <div className="circle_green"></div>
            <div>CfSM(Car-free Street Mapping)</div>
          </div>
          <div className="solution_section1_img_contents">
            <div>
              <div>
                <div className="solution_section1_img_contents_title">Before</div>
                <div className="before">
                  <img src={beforeImg} alt="CfSM 전 이미지" />
                </div>
              </div>
              <div className="icon_arrow">
                <img src={arrowIcon} alt="화살표 아이콘" />
              </div>
              <div>
                <div className="solution_section1_img_contents_title">After</div>
                <div className="after">
                  <img src={afterImg} alt="CfSM 후 이미지" />
                </div>
              </div>
            </div>
            <div className="solution_section1_description">
              <div>{t("section1.des")}</div>
              <div>
              {t("section1.des1")}
              </div>
            </div>
          </div>
        </div>
        <div className="solution_section2">
          <div className="vertical_line"><hr /></div>
          <div className="solution_section2_step1">
            <div className="solution_section2_step1_title">
              <div className="circle_blue"></div>
              <div>Step 1</div>
            </div>
            <div className="solution_section2_step1_content">
              <div><img src={captureImg} alt="CfSM 캡쳐" /></div>
              <div>Capture</div>
              <div className="solution_section2_step1_description">
                <div>
                {t("step1.des")}
                </div>
                <div> {t("step1.des1")}</div>
              </div>
            </div>
          </div>
          <div className="solution_section2_step1">
            <div className="solution_section2_step1_title">
              <div className="circle_blue"></div>
              <div>Step 2</div>
            </div>
            <div className="solution_section2_step1_content">
              <div><img src={combineImg} alt="CfSM 결합" /></div>
              <div>Combine</div>
              <div className="solution_section2_step1_description">
                <div>
                {t("step2.des")}
                </div>
              </div>
            </div>
          </div>
          <div className="solution_section2_step1">
            <div className="solution_section2_step1_title">
              <div className="circle_blue"></div>
              <div>Step 3</div>
            </div>
            <div className="solution_section2_step1_content">
              <div><img src={processImg} alt="CfSM 프로세스" /></div>
              <div>Process</div>
              <div className="solution_section2_step1_description">
                <div>
                {t("step3.des")}
                </div>
              </div>
            </div>
          </div>
          <div className="solution_section2_step1">
            <div className="solution_section2_step1_title">
              <div className="circle_blue"></div>
              <div>Step 4</div>
            </div>
            <div className="solution_section2_step1_content">
              <div><img src={monitorImg} alt="CfSM 모니터링" /></div>
              <div>Monitor</div>
              <div className="solution_section2_step1_description">
                <div>
                {t("step4.des")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution_section3_title">
          <div className="circle_green"></div>
          <div>3D MODELING</div>
        </div>
        <div className="solution_section3">
      <div className="Solution_section3_ContentsBox">
        
        <div className="carousel-container">
          <div className="carousel-container_box">
          <button className="nav-button" onClick={prev}>
            〈
          </button>
          <div className="model-display">
            {ThreeDModels[currentIndex].iframe}
            {ThreeDModels[currentIndex].caption}
          </div>
          <button className="nav-button" onClick={next}>
            〉
          </button>

          </div>
         
          <div className="indicator">
        {ThreeDModels.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
        </div>
      </div>
      

      <div className="solution_section3_description">
      {t("section3.des")}
      </div>
      <div className="solution_section3_description">
      {t("section3.des1")}
      </div>
    </div>

    <div className="solution_section4_title">
              <div className="circle_green"></div>
              <div>HD SAFETY MAP</div>
            </div>
        <div className="solution_section4">
          <div>
            
            <div className="solution_section4_description">
            {t("section4.des")}
            </div>
            <div className="solution_section4_description">
            {t("section4.des1")}
            </div>
          </div>
          <div>
            <img src={hdSafetyMapImg} alt="hd_safety_map 이미지" />
          </div>
        </div>
        <div className="solution_section5_title">
                <div className="circle_green"></div>
                <div>AUTOMATIC DATA PROCESSING</div>
              </div>
        <div className="solution_section5">
          <div>
            <div>
             
              <div className="solution_section5_description">
              {t("section5.des")}
              </div>
            </div>
            <div className="solution_section5_img_contents">
              <div>
                <img
                  src={automaticDataProcessingGif}
                  alt="automatic_data_processing 이미지"
                />
              </div>
              <div>
                <img
                  src={automaticPlatformImg}
                  alt="automatic_platform 이미지"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Solution;
