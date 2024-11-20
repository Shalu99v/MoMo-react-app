import React from 'react';
import Styles from '../BenefitsSection/BenefitsSection.module.css';
import MomoImage from '../../assets/momo2.jpg';
import TickIcon from '../../assets/Icons/TickIcon';
import CloseIcon from '../../assets/Icons/closeIcon';

const BenefitsSection = () => {
  return (
    <>
      <section className={Styles.BenefitsSection}>
        <div className={Styles.BenfitsImage}>
          <img src={MomoImage} alt="Motivational Feature" />
        </div>
        <div className={Styles.BenefitsContent}>
          <h2>Tired of not finishing that script?</h2>

          <div className="iconDiv">
            <CloseIcon />
            <p> Hitting snooze </p>
          </div>
          <div className="iconDiv">
            <CloseIcon />
            <p>Endless procrastinating </p>
          </div>
          <div className="iconDiv">
            <CloseIcon />
            <p>Never finding the time </p>
          </div>
          <div className="iconDiv">
            <CloseIcon />
            <p>Missing goals </p>
          </div>

          <button className={Styles.ctaButton}>Start Your Free Trial</button>
        </div>
      </section>
      <div className={Styles.betterWay}>
        <div className={Styles.betterWayQuotes}>
          <h2>There's a better way.</h2>

          <div className="iconDiv">
            <TickIcon />
            <p> Experiencing your habit transforms </p>
          </div>
          <div className="iconDiv">
            <TickIcon />
            <p>Accessing tools, people, and expertise </p>
          </div>
          <div className="iconDiv">
            <TickIcon />
            <p> Seeing your work move forward </p>
          </div>
          <div className={Styles.btnDiv}>
            <button className={Styles.ctaButton}>Start Your Free Trial</button>
          </div>
        </div>
        <div className={Styles.singleQuotes}>
          <h2>"Get more done </h2> <h2> before 9am than you</h2>{' '}
          <h2>used to get done all</h2> <h2>day."</h2>
        </div>
      </div>
    </>
  );
};

export default BenefitsSection;
