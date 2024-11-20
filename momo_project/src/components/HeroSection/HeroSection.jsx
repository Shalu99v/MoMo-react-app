import React from 'react';
import Styles from '../HeroSection/HeroSection.module.css';
import Hero from '../../assets/momo1.jpg';
import { FaPlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className={Styles.heroSection}>
      <div className={Styles.heroContent}>
        <h1>Actually do the work.</h1>
        <p>
          Accountability, community, and productivity coaching to help you start
          and finish the work.
        </p>
        <button className={Styles.ctaButton}>
          <FaPlay color="white" size={12} /> See How It Works
        </button>
      </div>
      <div className={Styles.heroImage}>
        <img src={Hero} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
