import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { IoLogoInstagram } from 'react-icons/io';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.contactMessage}>Questions? Let’s Talk.</p>
        <p className={styles.email}>
          We'll help you determine if Motivated Mornings is the right fit
        </p>
        <p className={styles.email}>
          for you and answer any of your questions.
        </p>
        <button className={styles.contactButton}>Let’s Talk</button>

        <div className={styles.socialLinks}>
          <Link to="/instagram">
            <IoLogoInstagram />
          </Link>
          <Link to="/facebook">
            <TiSocialFacebook />
          </Link>
          <Link to="/Linkedin">
            <TiSocialLinkedin />
          </Link>
        </div>
        <p className={styles.email}>Email: hello@motivatedmornings.work</p>

        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Motivated Mornings, Inc.All rights
          reserved. Site by <span className={styles.underlined}>Knapsack</span>
          <br />
          <span className={styles.underlined}>
            guidelines privacy terms members
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
