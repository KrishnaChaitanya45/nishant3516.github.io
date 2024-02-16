import React from "react";
import styles from "../global/styles/Footer.module.css";
import logo from "../assets/images/MRU-logo.png";
import logo360 from "../assets/images/360_degree.png";
import facebookLogo from "../assets/images/360_degree.png";
import instagramLogo from "../assets/images/360_degree.png";
import youtubeLogo from "../assets/images/360_degree.png";
import twitterLogo from "../assets/images/360_degree.png";

const footerOptions = [
  {
    title: "ABOUT",
    data: [
      "Home",
      "University",
      "Management",
      "Advisory Body",
      "MRGI",
      "Statutory Authorities",
      "Statutory Body",
      "Examinations",
      "Placements",
    ],
  },

  {
    title: "CAMPUS LIFE",
    data: [
      "Hostel",
      "Library",
      "Cafeteria",
      "Laboratories",
      "Sports",
      "Transport",
    ],
  },
  {
    title: "QUICK LINKS",
    data: [
      "UGC Application",
      "Conferences",
      "MOUs and Collaborations",
      "Contact Us",
      "Student Login",
    ],
  },
  {
    title: "ACADEMICS",
    data: [
      "School of Engineering",
      "School of Agriculture",
      "School of Allied Healthcare Sciences",
      "School of Management / Commerce",
      "School of Sciences",
      "School of Commerce & Arts",
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.parentFooter}>
      <div className={styles.footerMainDiv}>
        <div
          className=""
          style={{
            fontSize: "12px",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <img
            src={
              "https://static.wixstatic.com/media/6685d7_3d4e7a3b47f645e6b8cada0ebadaae63~mv2.png/v1/fill/w_219,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MRU-Logo2.png"
            }
            alt="Malla Reddy University University Logo"
            style={{
              width: "150px",
              height: "50px",
            }}
          />
          <p>
            ​(As per Telangana State Private Universities
            <br />
            Act No.13 of 2020 and G.O.Ms.No.14, Higher
            <br />
            Education (UE) Department)
          </p>
          <br />
          <p>
            Maisammaguda, Dulapally,
            <br />
            Hyderabad, Telangana 500100
            <br />
            Phone: 94971-94971, 91778-78365
            <br />
            info@mallareddyuniversity.ac.in
            <br />
            admissions@mallareddyuniversity.ac.in
          </p>
        </div>
        <div className={styles.quickLinksContainer}>
          {footerOptions.map((item, index) => {
            return (
              <div key={index} className={styles.indFooterDiv}>
                <p
                  style={{
                    color: "#E0661F",
                    fontSize: "16px",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                  }}
                >
                  {item.title}
                </p>
                <hr />
                <div style={{ height: "10px" }}></div>
                {item.data.map((option, index) => {
                  return (
                    <p
                      key={index}
                      style={{ fontSize: "13px", paddingBottom: "2px" }}
                    >
                      {option}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.div360}>
          <img
            src={
              "https://static.wixstatic.com/media/6685d7_927ca88e097f4b96bcb6a4f884ae92db~mv2.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/360_degree.png"
            }
            alt="360 degree"
          />
          <div className={styles.image360}>
            <p>360 Degree</p>
            <p>VIRTUAL TOUR</p>
          </div>
        </div>
        <div>
          <img
            src={
              "https://static.wixstatic.com/media/ce6ec7c11b174c0581e20f42bb865ce3.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ce6ec7c11b174c0581e20f42bb865ce3.png"
            }
            style={{ marginRight: "1vw" }}
            alt="Facebook Logo"
          />
          <img
            src={
              "https://static.wixstatic.com/media/fdcfaba150fc427da298a00cb09d91c1.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fdcfaba150fc427da298a00cb09d91c1.png"
            }
            style={{ marginRight: "1vw" }}
            alt="Instagram Logo"
          />
          <img
            src={
              "https://static.wixstatic.com/media/71ac09a5a92848cc943bf2ca2a09a6d0.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/71ac09a5a92848cc943bf2ca2a09a6d0.png"
            }
            style={{ marginRight: "1vw" }}
            alt="Youtube Logo"
          />
          <img
            src={
              "https://static.wixstatic.com/media/444f49eac2e348f89128293b0c6432fd.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/444f49eac2e348f89128293b0c6432fd.png"
            }
            style={{ marginRight: "1vw" }}
            alt="Twitter Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
