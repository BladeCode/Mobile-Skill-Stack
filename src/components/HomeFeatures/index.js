import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '聚焦移动端生态',
    Svg: require('../../../static/img/undraw_android.svg').default,
    description: (
      <>
        以 Java 语言为主，学习总结企业级应用开发所要具备的框架，中间件，数据结构，网络，领域驱动设计等技能
      </>
    ),
  },
  {
    title: '配套源码示例',
    Svg: require('../../../static/img/undraw_insert_block.svg').default,
    description: (
      <>
        学习实践过程中也许蹩脚，也许还不够优雅，的学习笔记，<code>仅供参考</code>
      </>
    ),
  },
  {
    title: '技术演进发展',
    Svg: require('../../../static/img/undraw_note_list.svg').default,
    description: (
      <>
        了解技术的发展历程，知晓对应的技术所能解决的问题，应用的场景。我们要知其然也要知其所以然.
      </>
    ),
  },
  {
    title: '业务抽象',
    Svg: require('../../../static/img/undraw_mobile_prototyping.svg').default,
    description: (
      <>
        常见业务功能剖析分解，抽象概括。比如各种 RecyclerView 综合应用以及自定义的 View 定义封装等
      </>
    ),
  },
  {
    title: '应用架构',
    Svg: require('../../../static/img/undraw_product_teardown.svg').default,
    description: (
      <>
        不管你采用的是单模块，多模块，功能化，还是组件化开发方式。你都需要了解掌握每种架构所应对的场景，以选择合适的开发架构
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
