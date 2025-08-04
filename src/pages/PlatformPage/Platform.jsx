import React from 'react';
import { useTranslation } from 'react-i18next';
import './Platform.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import platformbannerimg from '../../images/platform/platform_benner.png'

const Platform = () => {
const { t } = useTranslation('Platform'); // Platform namespace 사용


return (

<>
  <Header />
  <div className='Header_Block'></div>
  <div className='Banner'>
    <img className='Banner_img' src={platformbannerimg} />
  </div>
  <div className='Platfrom_Section1'>
    <div className='Platfrom_Section1_Contents'>
      <div className='Platfrom_Section1_Contents_Title_Box'>
        <div className='Platfrom_Section1_Contents_Title'>DaaS</div>
        <div className='Platfrom_Section1_Contents_Sub'>Drone as a Service</div>
      </div>
      <div className='Platfrom_Section1_Contents_Des'>
        Provides 3D and Pano from drone images that are used for building spatial information in a form of URL for easier access to analyses and reports.
      </div>
      <div className='Platfrom_Section1_Contents_Info_Box'>
        <div className='Platfrom_Section1_Contents_Info_Title_Box'>
          <div className='Platfrom_Section1_Contents_Info_Title'>DaaS 3D</div>
          <div className='Platfrom_Section1_Contents_Info_Sub'>Uploads the images taken for building 3D spatial data to the platform with simple 'drag & drop'. ​The whole process automated with a parallel processing-based network provides various data analysis and reports.</div>
        </div>
        <div className='Platfrom_Section1_Contents_Info_Img_Box'> </div>
        <div className='Platfrom_Section1_Contents_Info_Pano_Box'>
          <div className='Platfrom_Section1_Contents_Info_Pano_Info_Box'>
            <div className='Platfrom_Section1_Contents_Info_Pano_Info_Title'>DaaS Pano(360°)</div>
            <div className='Platfrom_Section1_Contents_Info_Pano_Info_Sub'>Makes HTML5-based results from several images going through 360° Panoramic platform and a real-time auto-process (with mosaic and color correction process, etc.) which automatically sends the result to users in any OS & device.</div>
          </div>
          <div className='Platfrom_Section1_Contents_Info_Pano_Img_Box'> </div>
        </div>
      </div>
    </div>
  </div>
  <div className='Platfrom_Section2'>
  <div className='Platfrom_Section2_Contents'>
  <div className='Platfrom_Section2_Contents_Title_Box'>
        <div className='Platfrom_Section2_Contents_Title'>DTM </div>
        <div className='Platfrom_Section2_Contents_Sub'>Drone Traffic Mapper / Drone to Mapper</div>
  </div>
  <div className='Platfrom_Section2_Contents_Des'>
  DTM provides novel solutions of aerial, water surface & ground surveying with drone’s Artificial Intelligence (AI) brain and eyes.
  Drone images become more valuable with Data Science Technology.
      </div>
      <div className='Platfrom_Section2_Contents_Info_Box'>

      </div>


  </div>

  </div>

  <Footer />
</>

);
};

export default Platform;
