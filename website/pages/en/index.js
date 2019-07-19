/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HomeIndexSplash(props) {
  const {siteConfig, language} = props;

  return (
    <div className="index-hero">
      <div className="index-hero-inner">
        <h1 className="index-hero-project-tagline">
          <img
            alt="Docusaurus with Keytar"
            className="index-hero-logo"
            src={`${siteConfig.baseUrl}img/favicon.svg`}
          />
          {/* {siteConfig.title} makes it easy to maintain{' '} */}
          <span className="index-hero-project-keywords">Open Source</span>{' '}
         mobile skill stack documentation websites
        </h1>
        <div className="index-ctas">
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
    </div>
  );
}

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div>
        <HomeIndexSplash siteConfig={siteConfig} language={language} />
        <SplashContainer>
          <Logo img_src={`${baseUrl}img/undraw_android.svg`} />
          <div className="inner">
            <ProjectTitle siteConfig={siteConfig} />
            <PromoSection>
              <Button href={docUrl('android/roadmap.html')}>Android</Button>
              <Button href={docUrl('ios/roadmap.html')}>iOS</Button>
              <Button href={docUrl('flutter/roadmap.html')}>Flutter</Button>
              <Button href={docUrl('rn/roadmap.html')}>ReactNative</Button>
            </PromoSection>
          </div>
        </SplashContainer>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    // const FeatureCallout = () => (
    //   <div
    //     className="productShowcaseSection paddingBottom"
    //     style={{textAlign: 'center'}}>
    //     <h2>Feature Callout</h2>
    //     <MarkdownBlock>These are features of this project</MarkdownBlock>
    //   </div>
    // );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more practical, use [Mobile-Skill-Stack](https://mobile.incoder.org)! Let me more ' +
              'Project practice case presentation. ' +
              'Source code analysis',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Simple code examples',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of about this project',
            image: `${baseUrl}img/introduce.png`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Learn not to get lost for **Mobile Developement**.',
            image: `${baseUrl}img/undraw_mobile_life.svg`,
            imageAlign: 'right',
            title: 'Clear Learning Roadmap',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Restore the essence of technology',
            image: `${baseUrl}img/undraw_product_teardown.svg`,
            imageAlign: 'top',
            title: 'Technology and dismantling',
          },
          {
            content: 'Principle of implementation',
            image: `${baseUrl}img/undraw_mobile_prototyping.svg`,
            imageAlign: 'top',
            title: 'Function point analysis',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Contributing This?</h2>
          <p>This project is contributing by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;