import React from 'react';
import { useTranslation } from 'react-i18next';
import './DaasPanoPage.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import daaspano_bg from '../../images/DaasPano/daaspano_bg.png'
import yeongwol_pano from '../../images/DaasPano/yeongwol_pano.png'
import stadium_pano from '../../images/DaasPano/stadium_pano.png'
import park_pano from '../../images/DaasPano/park_pano.png'


const DaasPano = () => {

    const { t } = useTranslation('daaspano'); // Platform namespace 사용
    
    return (
    <>
      <Header />
      <div className='Header_Block'></div>
      <div className='DaasPanoContainer'>
        <div className='DaasPanoSetion1'>
            <img className='daaspano_bg' src={daaspano_bg} />
            <h1 className='daaspano_title'> {t('title')}</h1>
            <p className='daaspano_des'> {t('des')}</p>
        </div>
        <div className='DaasPanoSetion2'>
            <div className='DaasPanoSetion2_Box_1'>
            <div className='DaasPano_Img_box'>
                <div className='Img_Title'  onClick={() => window.open("http://yeongwol.dromii.com/", "_blank")}
  style={{ cursor: "pointer" }}>YEONGWOL</div>
                <img className='pano_bg' src={yeongwol_pano} />
            </div>
            

            </div>
            <div className='DaasPanoSetion2_Box_2'>
            <div className='DaasPano_Img_box'>
                <div className='Img_Title'  onClick={() => window.open("http://worldcup.4smapper.com/", "_blank")}
  style={{ cursor: "pointer" }}>STADIUM</div>
                <img className='pano_bg' src={stadium_pano} />
            </div>
            <div className='DaasPano_Img_box'>
                <div className='Img_Title'  onClick={() => window.open("http://worldcuppark.4smapper.com/", "_blank")}
  style={{ cursor: "pointer" }}>PARK</div>
                <img className='pano_bg' src={park_pano} />
            </div>
            </div>

        </div>

      </div>
  
      <Footer />
    </>
    );
    };
    
    export default DaasPano;
    