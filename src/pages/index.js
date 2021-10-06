import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import HomepageFeatures from '../components/HomeFeatures';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt="Docusaurus with Keytar"
            className={styles.heroLogo}
            src={`${siteConfig.baseUrl}img/favicon_mobile.svg`}
          />
          <span
            className={styles.heroTitleTextHtml}
            dangerouslySetInnerHTML={{
              __html: '<b>Open Source</b> mobile skill stack documentation websites'
            }}
          />
        </h1>
        <div className="hero__subtitle">learn roadmap & experience & analysis source code.</div>
        <div className={styles.indexCtas}>
          <Link className="button button--caution" to="/about/index">
            <div>Get Started</div>
          </Link>
          <Link
            className="button button--info"
            to="/blog">
            <div>Milestones</div>
          </Link>
          <span className="index-ctas-github-button">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=BladeCode&amp;repo=Mobile-Skill-Stack&amp;type=star&amp;count=true&amp;size=large"
              frameBorder={0}
              scrolling={0}
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
