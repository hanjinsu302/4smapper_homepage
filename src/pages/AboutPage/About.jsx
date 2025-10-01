import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import aboutbannerimg from "../../images/about/about_bg.png";
import about_section2_bg from "../../images/about/about_section2_bg.png";
import aboutinfoimg from "../../images/about/about_info.png";
import innovation from "../../images/about/innovation.png";
import environment from "../../images/about/environment.png";
import social from "../../images/about/social.png";
import transparency from "../../images/about/transparency.png";
import why1 from "../../images/about/about_why1.png";
import why2 from "../../images/about/about_why2.png";
import why3 from "../../images/about/about_why3.png";
import why4 from "../../images/about/about_why4.png";

const About = () => {
  const { t } = useTranslation("about"); // About namespace 사용

  return (
    <>
      <Header />
      <div className="Header_Block"></div>
      <div className="About_Section1">
        <div className="about_section_title">
          <div className="circle_red"></div>
          <div>Who We Are</div>
        </div>
        <div className="about_title">{t("title")}</div>
        <div className="about_title2">{t("title2")}</div>
      </div>

      <div className="About_Section2">
        <div>
          <div className="about_vision_mission">
            <div>
              <div className="about_section_title">
                <div className="circle_red"></div>
                <div>Vision</div>
              </div>
              <div className="about_vision">{t("vision")}</div>
            </div>
            <div>
              <div className="about_section_title">
                <div className="circle_red"></div>
                <div>Mission</div>
              </div>
              <div className="about_mission">{t("mission")}</div>
            </div>
          </div>
          <div className="about_title3">{t("title3")}</div>
        </div>
      </div>

      <div className="About_Section3">
        <div>
          <div className="about_section_title">
            <div className="circle_red"></div>
            <div>Core Values</div>
          </div>
          <div className="about_section3_values">
            <div className="core_values">
              <img className="innovation" src={innovation} />
              <div>Innovation</div>
              <div className="about_description">{t("innovation")}</div>
            </div>
            <div className="core_values">
              <img className="innovation" src={environment} />
              <div>Environment</div>
              <div className="about_description">{t("environment")}</div>
            </div>
            <div className="core_values">
              <img className="innovation" src={social} />
              <div>Social</div>
              <div className="about_description">{t("social")}</div>
            </div>
            <div className="core_values">
              <img className="innovation" src={transparency} />
              <div>Transparency</div>
              <div className="about_description">{t("transparency")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="About_Section4">
        <div className="about_section_title">
          <div className="circle_red"></div>
          <div>Why 4S Mapper?</div>
        </div>

        <div className="why_cards">
          <div className="why_card">
            <div className="why_img">
              <img src={why1} alt="Advanced GeoAI Expertise" />
            </div>
            <div className="why_title">Advanced GeoAI Expertise</div>
            <div className="why_description">{t("desc1")}</div>
          </div>

          <div className="why_card">
            <div className="why_img">
              <img src={why2} alt="Multi-source Data Integration" />
            </div>
            <div className="why_title">Multi-source Data Integration</div>
            <div className="why_description">{t("desc2")}</div>
          </div>

          <div className="why_card">
            <div className="why_img">
              <img src={why3} alt="Automation & Efficiency" />
            </div>
            <div className="why_title">Automation & Efficiency</div>
            <div className="why_description">{t("desc3")}</div>
          </div>

          <div className="why_card">
            <div className="why_img">
              <img src={why4} alt="Future-ready Platform" />
            </div>
            <div className="why_title">Future-ready Platform</div>
            <div className="why_description">{t("desc4")}</div>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="./test.html"
        title="Test HTML"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>

      <Footer />
    </>
  );
};

export default About;
