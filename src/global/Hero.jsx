import React from "react";
import styles from "../global/styles/Hero.module.css";
import HeroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className={styles.container} style={{ backgroundImage: HeroImage }}>
      <div
        className={styles.heroDiv}
        style={{
          backgroundImage:
            'url("https://static.wixstatic.com/media/0c0246_60a4ca503e284139860de9e4ea4b9701~mv2.jpg/v1/fill/w_1348,h_286,al_c,q_85,enc_auto/0c0246_60a4ca503e284139860de9e4ea4b9701~mv2.jpg")',
        }}
      >
        <h1 className={styles.headText}>
          Department of Computer Science and Engineering
        </h1>
      </div>
    </div>
  );
};

export default Hero;
