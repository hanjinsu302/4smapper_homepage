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


const ThreeDModels = [
  {
    id: 1,
    iframe: (
      <iframe
        width="640"
        height="480"
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
        width="640"
        height="480"
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
        width="640"
        height="480"
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
        width="640"
        height="480"
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

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ThreeDModels.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === ThreeDModels.length - 1 ? 0 : prev + 1));
  };

  function _3dmapping1() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/18a444fe6d0348958ded01f846269f81/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true">
          </iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/18a444fe6d0348958ded01f846269f81?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Surisan-20161123 Simplified 3d Mesh
            </a>
          </p>
        </div>
    );
  }
  function _3dmapping2() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/fedb5948d35b490d9ce0c65f017cb86f/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true">
          </iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/fedb5948d35b490d9ce0c65f017cb86f?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              DJI House 3D Mesh
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }
  function _3dmapping3() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/66f365b83324486cb408c622714c2844/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              onWheel={() => {}}>
          </iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/66f365b83324486cb408c622714c2844?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Model Building by Dji with P (3D Mesh)
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }
  function _3dmapping4() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/71f47e1fbd1f48c2833b6b10afa34efe/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              onWheel={() => {}}>
          </iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/71f47e1fbd1f48c2833b6b10afa34efe?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Hansei-20161207 Simplified 3d Mesh
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }

 
  return (
    <>
      <Header />
      <div className='Header_Block'></div>
      <div className="solution_banner">SOLUTIONS</div>
      <div className="container">
        <div className="solution_section1">
          <div className="solution_section1_title">
            <div className="circle_green"></div>
            <div>Car-free Street Mapping(CfSM)</div>
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
              <div>
                Deep Learning and Drone-based Automated Image Removal Solution for
                Vehicles on the Road.
              </div>
              <div>
                An innovative service that will replace Automated traditional road
                monitoring system.
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
                  Capture enough data to create a dataset using the drone.
                </div>
                <div>The data type must be in image format.</div>
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
                  Combine tile data into a single road image for processing.
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
                  Run the dataset through the CfSM solution to remove cars and
                  shadows. <br />
                  The result will be a clean, undistorted road image.
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
                  Monitor the status of the road using CfSM processed image.
                  <br />
                  Detect the condition of the road by running an analysis on the
                  server.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution_section3">
      <div className="Solution_section3_ContentsBox">
        <div className="solution_section3_title">
          <div className="circle_green"></div>
          <div>3D MODELING</div>
        </div>
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
        Uploads the images taken for building 3D spatial data to the platform with simple 'drag&drop'.
      </div>
      <div className="solution_section3_description">
        The whole process automated with a parallel processing-based network provides various data analysis and reports.
      </div>
    </div>


        <div className="solution_section4">
          <div>
            <div className="solution_section4_title">
              <div className="circle_green"></div>
              <div>HD SAFETY MAP</div>
            </div>
            <div className="solution_section4_description">
              AfGG solution creates an High-Definition Safety Map with road
              marking information.
            </div>
            <div className="solution_section4_description">
              AfGG solution utilizes DTM ML to auto label the road markings
              (double yellow line, crosswalk, stop line, etc.) or detect risk
              factors (pothole, crack, etc.) to gather road information.
            </div>
          </div>
          <div>
            <img src={hdSafetyMapImg} alt="hd_safety_map 이미지" />
          </div>
        </div>
        <div className="solution_section5">
          <div>
            <div>
              <div className="solution_section5_title">
                <div className="circle_green"></div>
                <div>AUTOMATIC DATA PROCESSING</div>
              </div>
              <div className="solution_section5_description">
                Distributes data processing step using the Node to automate the
                processing.
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
