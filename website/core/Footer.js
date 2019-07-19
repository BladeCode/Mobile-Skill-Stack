/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('android/roadmap.html', this.props.language)}>
              Android RoadMap
            </a>
            <a href={this.docUrl('ios/roadmap.html', this.props.language)}>
              iOS RoadMap
            </a>
            <a href={this.docUrl('flutter/roadmap.html', this.props.language)}>
              Flutter RoadMap
            </a>
            <a href={this.docUrl('rn/roadmap.html', this.props.language)}>
            ReactNative RoadMap
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {/* <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a> */}
            <a
              href="https://developer.android.com"
              target="_blank"
              rel="noreferrer noopener">
              Android
            </a>
            <a href="https://developer.apple.com"
              target="_blank">
              iOS
            </a>
            <a
              href="https://flutter.dev"
              target="_blank"
              rel="noreferrer noopener">
              Flutter
            </a>
            <a
              href="https://facebook.github.io/react-native"
              target="_blank"
              rel="noreferrer noopener">
              ReactNative
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://incoder.org" target="_blank">Blog</a>
            <a href="https://github.com/BladeCode" target="_blank">GitHub</a>
          </div>
        </section>
        <section className="copyright">
          {this.props.config.copyright && (
            <span>{this.props.config.copyright}</span>
          )}{' '}
          Powered by <a href="https://docusaurus.io/">Docusaurus</a>.
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
