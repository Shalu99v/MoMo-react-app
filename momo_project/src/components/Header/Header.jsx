import React from 'react';
import Styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className={Styles.header}>
      <div className={Styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={Styles.listsButton}>
        <ul className={Styles.navLinks}>
          <li>Who It’s For</li>
          <li>About</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>
            <FaUser size={14} color="#3e3420" />
          </li>
        </ul>
        <button className={Styles.trialButton}>Start Your Free Trial</button>
      </div>
    </nav>
  );
};

export default Header;
