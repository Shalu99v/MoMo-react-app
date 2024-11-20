import React from 'react';
import styles from './FeatureHighlights.module.css';
import { FaCloudSun } from 'react-icons/fa';
import { SiVirtualbox } from 'react-icons/si';
import { FaSlack } from 'react-icons/fa6';
import { SiSession } from 'react-icons/si';
import { GrPlan } from 'react-icons/gr';

const FeatureHighlights = () => {
  const features = [
    {
      title: 'Morning Kick-Off Calls',
      description:
        'Build healthy habits.Jumpstart each day with a 10min group video call with an inspiring thought about creating.Stay accountable and motivated.Offered Mon-Fri at 5am and 7am.',
      icon: <FaCloudSun />,
    },
    {
      title: 'Virtual Coworking',
      description:
        'Following Morning Kick-Off Calls,virtually co-work with fellow creators(MoMos).Feel the momentum of a 2-hour silent group of coworking sesh.Celebtarate benchmark with your peers.',
      icon: <SiVirtualbox />,
    },
    {
      title: 'Private Slack Group',
      description:
        'Stay connected with  what your fellow MoMos are doing,creating and accomplishing.A space for realtionship building,inspiration,feedback and celebrating momentum',
      icon: <FaSlack />,
    },
    {
      title: 'Productivity coaching sessions*',
      description:
        'A weekly 30-minute private meeting to discuss goals, setbacks,backthroughs,strategies and create ways to be sure the momentum keeps going.',
      icon: <SiSession />,
    },
    {
      title: 'Tailored Action Plans*',
      description:
        'Our personal coaching is more than rah-rah.You will go away with specific action plans to keep you moving in the right direction.Forward',
      icon: <GrPlan />,
    },
  ];

  return (
    <section className={styles.featureHighlights}>
      <h2 className={styles.heading}>
        Motivated Mornings is a virtual co-working community
      </h2>
      <h2 className={styles.heading}>proven to help you do the work.</h2>
      <div className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureBlock}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
