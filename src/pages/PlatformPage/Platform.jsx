import React from 'react';
import { useTranslation } from 'react-i18next';
import './Platform.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import platformbannerimg from '../../images/platform/platform_benner.png'
import daas_3d from '../../images/platform/daas_3d.png'
import daas_pano from '../../images/platform/daas_pano.png'
import cfsm_2 from '../../images/platform/cfsm_2.png'
import platform_dtmml from '../../images/platform/platform_dtmml.png'
import platform_dtmai from '../../images/platform/platform_dtmai.png'
import platform_afgg from '../../images/platform/platform_afgg.png'
import { NavLink,useLocation } from 'react-router-dom';

const Platform = () => {
const { t } = useTranslation('platform'); // Platform namespace 사용

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
        <div className='Platfrom_Section1_Contents_Sub'>{t('section1.daas.des')}</div>
      </div>
      <div className='Platfrom_Section1_Contents_Des'>
        {t('section1.daas.des1')}
      </div>
      <div className='Platfrom_Section1_Contents_Info_Box'>
        <div className='Platfrom_Section1_Contents_Info_Title_Box'>
          <div className='Platfrom_Section1_Contents_Info_Title'>DaaS 3D</div>
          <div className='Platfrom_Section1_Contents_Info_Sub'>{t('section1.daas3d.des')}</div>
          
        </div>
        <div className='Platfrom_Section1_Contents_Info_Img_Box'>
          <img src={daas_3d} className='daas_3d_img' />
        </div>
        <div className='Platfrom_Section1_Contents_Info_Pano_Box'>
          <div className='Platfrom_Section1_Contents_Info_Pano_Info_Box'>
            <div className='Platfrom_Section1_Contents_Info_Pano_Info_Title'>DaaS Pano(360°)</div>
            <div className='Platfrom_Section1_Contents_Info_Pano_Info_Sub'>{t('section1.daaspano.des')}</div>
            <NavLink to="/DaasPano">
              <div className='Platfrom_Section1_Contents_More_btn'>
                more 〉
              </div>
            </NavLink>
          </div>
          <div className='Platfrom_Section1_Contents_Info_Pano_Img_Box'>
            <img src={daas_pano} className='daas_pano_img' />
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='Platfrom_Section2'>
    <div className='Platfrom_Section2_Contents'>
      <div className='Platfrom_Section2_Contents_Title_Box'>
        <div className='Platfrom_Section2_Contents_Title'>DTM </div>
        <div className='Platfrom_Section2_Contents_Sub'>{t('section2.dtm.des')}</div>
      </div>
      <div className='Platfrom_Section2_Contents_Des'>
        {t('section2.dtm.des1')}
      </div>
      <div className='Platfrom_Section2_Infobox'>
        <div className='Platfrom_Section2_InfoContentsbox'>
        <div className='Platfrom_Section2_InfoContentsbox_imgbox'>
          <img src={platform_dtmml} alt="asda" className='Platfrom_Section2_InfoContentsbox_img'/>
        </div>
        <div className='Platfrom_Section2_InfoContentsbox_desbox'>
        <div className='Platfrom_Section2_InfoContentsbox_desTitle'>
        DTM ML
          </div>
          <div className='Platfrom_Section2_InfoContentsbox_des'>
       {t("section2.dtmml.des")}
          </div>

        </div>
      </div>
      <div className='Platfrom_Section2_InfoContentsbox2'>
        <div className='Platfrom_Section2_InfoContentsbox_desbox'>
        <div className='Platfrom_Section2_InfoContentsbox_desTitle'>
        DTM AI
          </div>
          <div className='Platfrom_Section2_InfoContentsbox_des2'>
       {t("section2.dtmai.des")}
          </div>
        </div>
        <div className='Platfrom_Section2_InfoContentsbox_imgbox'>
          <img src={platform_dtmai} alt="asda" className='Platfrom_Section2_InfoContentsbox_img'/>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div className='Platfrom_Section3'>
    <div className='Platfrom_Section3_Contents_Info_Box'>
  <div className='Platfrom_Section3_Contents'>
  <div className='Platfrom_Section1_Contents_Title_Box'>
        <div className='Platfrom_Section1_Contents_Title'>CfSM</div>
        <div className='Platfrom_Section1_Contents_Sub'>Car-free Street Mapping</div>
      </div>
        <img src={cfsm_2} className='daas_pano_img' />
        <div className='Platfrom_Section3_Contents_DesBox'>
          <div className='Platfrom_Section3_Contents_Des_1'>
            {t('section2.cfsm.des')}
          </div>
          <div className='Platfrom_Section3_Contents_Des_2'>
            Car-free Street Mapping
          </div>
        </div>
      </div>
      </div>
  </div>
  <div className='Platform_Section4'>
    <div className='Platfrom_Section4_Contents'>
    <div className='Platfrom_Section1_Contents_Title_Box'>
        <div className='Platfrom_Section1_Contents_Title'>AfGG</div>
        <div className='Platfrom_Section1_Contents_Sub'>Auto-labeling 5G Geo-spatial Information HDS Map</div>
      </div>
    <div>
    <div className='Platfrom_Section4_Contents_DesBox'>
            {t('section2.afgg.des')}
        </div>
    </div>
    <img className='afgg_img' src={platform_afgg} />
    </div>
  </div>
  <Footer />
</>
);
};

export default Platform;
