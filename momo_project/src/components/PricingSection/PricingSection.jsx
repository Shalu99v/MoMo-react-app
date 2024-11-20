import React from 'react';
import Styles from '../PricingSection/PricingSection.module.css';

const PricingSection = () => {
  return (
    <section className={Styles.pricingSection}>
      <h2>Start with a free trial. Change your plan anytime.</h2>
      <div className={Styles.pricingCards}>
        <div className={Styles.card}>
          <h3>MoMo</h3>
          <p>$49/mo.</p>
          <p>
            Get the motivation and accountability you need to get real work
            done.
          </p>
        </div>
        <div className={Styles.card}>
          <h3>MoMo Pro</h3>
          <p>$399/mo.</p>
          <p>
            Take it your next level with your own personal productivity coach.
          </p>
        </div>
      </div>
      <button className={Styles.ctaButton}>View Plans Details</button>
    </section>
  );
};

export default PricingSection;
