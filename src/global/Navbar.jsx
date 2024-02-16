import React from "react";
import styles from "./styles/Navbar.module.css";
import StudentLogo from "../assets/images/StudentLogin_icon.png";

const NavBar = () => {
  const menuItems = [
    "Home",
    "About Us",
    "Schools",
    "Academics",
    "Examinations",
    "Facilities",
    "Admissions",
    "Placements",
    "Downloads",
    "IQAC",
    "NSIP",
    "IIC",
  ];

  // Write the JSON to a file or use it as needed

  return (
    <div className={styles.container}>
      <ul className={styles.mainNavbar}>
        <li className={styles.item}>
          <img
            src="https://static.wixstatic.com/media/6685d7_3d4e7a3b47f645e6b8cada0ebadaae63~mv2.png/v1/fill/w_265,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MRU-Logo2.png"
            alt=""
            className={styles.icon}
            // width={150}
            // height={50}
          />
        </li>
        <li className={styles.sideContainer}>
          <div className={styles.buttonsDiv}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={
                  "https://static.wixstatic.com/media/6685d7_e3459c6e4ff541a989e0e519001cbec9~mv2.png/v1/fill/w_39,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/StudentLogin_icon.png"
                }
                alt="Student Logo"
              />
              <span>Student Corner</span>
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={
                  "https://static.wixstatic.com/media/6685d7_226cb5087a884ca3af54bba1c57ce1bc~mv2.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VideoIcon.png"
                }
                alt="Student Logo"
              />
              <span>Corporate Video</span>
            </button>
          </div>
          <ul className={styles.menus}>
            {menuItems.map((item, index) => {
              return (
                <li key={index} className={styles.menuItem}>
                  {item}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
