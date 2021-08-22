import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Clear Learning Roadmap',
    Svg: require('../../static/img/undraw_insert_block.svg').default,
    description: (
      <>
        Learn not to get lost for Mobile Developement.
      </>
    ),
  },
  {
    title: 'Technology and dismantling',
    Svg: require('../../static/img/undraw_product_teardown.svg').default,
    description: (
      <>
        Restore the essence of technology.
      </>
    ),
  },
  {
    title: 'Function point analysis',
    Svg: require('../../static/img/undraw_mobile_prototyping.svg').default,
    description: (
      <>
        Principle of implementation.
      </>
    ),
  },
  {
    title: 'Simple code examples',
    Svg: require('../../static/img/undraw_code_review.svg').default,
    description: (
      <>
        To make your landing page more practical, use <a href="https://mobile.incoder.org">Mobile-Skill-Stack</a>! Let me more . Project practice case presentation. Source code analysis
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
