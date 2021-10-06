import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function Card({ className, name, children, githubUrl, twitterUrl }) {
  return (
    <div className={className}>
      <div className="avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xl"
          src={githubUrl + '.png'}
          alt={`${name}'s avatar`}
        />
        <div className="avatar__intro">
          <h4 className="avatar__name">{name}</h4>
        </div>
      </div>
    </div>
  );
}

function CardCol(props) {
  return (
    <Card {...props} className={'col col--2 margin-bottom--lg'} />
  );
}

export function VideoCard() {
  return (
    <div className="row">
      <CardCol
        name="Endilie Yacop Sucipto"
        githubUrl="https://github.com/endiliey"
        twitterUrl="https://twitter.com/endiliey">
        {/* <Translate id="team.profile.Endilie Yacop Sucipto.body">
          Maintainer @docusaurus · 🔥🔥🔥
        </Translate> */}
      </CardCol>
      <CardCol
        name="Wei Gao"
        githubUrl="https://github.com/wgao19"
        twitterUrl="https://twitter.com/wgao19">
        {/* <Translate id="team.profile.Wei Gao.body">
          🏻‍🌾 Work in progress React developer, maintains Docusaurus, writes
          docs and spams this world with many websites.
        </Translate> */}
      </CardCol>
    </div>
  );
}

const Books = [
  {
    name: 'Effective Java',
    image: 'https://img14.360buyimg.com/n1/s300x200_jfs/t1/28526/24/4598/165510/5c3433c7Ea1da5694/eb0bb43a326e8709.jpg',
    url: 'https://book.douban.com/subject/27047716/',
    description: (
      <>
        Java功底
      </>
    ),
  },
  {
    name: 'TCP/IP 详解',
    image: 'https://img11.360buyimg.com/n1/s300x200_jfs/t1/26170/20/14133/390645/5ca42655E4ce70956/f42a78937314e84c.jpg',
    url: 'https://book.douban.com/subject/1088054/',
    description: (
      <>
        共卷一，卷二，卷三，网络必备
      </>
    ),
  },
];

const NetworkVideo = [
  {
    name: '方方方已经存在了',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1yE411G7Ma',
    // description: (
    //   <>
    //     计算机网络（谢希仁第七版）.
    //   </>
    // ),
  },
  {
    name: '韩立刚',
    // image: 'https://i1.hdslb.com/bfs/face/1814653848d0a645c053efa7a7b40b9c53929d38.jpg@96w_96h_1c_1s.webp',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1gV411h7r7',
  },
  {
    name: '王道论坛',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV19E411D78Q',
  },
  {
    name: '湖科大教书匠',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1c4411d7jb',
  },
  {
    name: '中科大-郑老师',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1JV411t7ow',
  },
];

const StructureAndAlgorithmVideo = [
  {
    name: '临风笑笑生',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV11s41167h6',
  },
  {
    name: '星球杯25',
    // image: 'https://i1.hdslb.com/bfs/face/1814653848d0a645c053efa7a7b40b9c53929d38.jpg@96w_96h_1c_1s.webp',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1JW411i731',
  },
  {
    name: '87师兄',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1nJ411V7bd',
  },
  {
    name: '尚硅谷',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1E4411H73v',
  },
  {
    name: '大雪菜',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://space.bilibili.com/7836741',
  },
];

const OperatingSystemVideo =[
  {
    name: '绿导师原谅你了',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1N741177F5',
  },
  {
    name: '星球杯25',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1js411b7vg',
  },
  {
    name: 'FCCJK',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1d4411v7u7',
  },
];

const ComputerCompositionPrinciple =[
  {
    name: '绿导师原谅你了',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1t4411e7LH',
  },
  {
    name: '东南偏南2018',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1c4411w7nd',
  },
];

const CompilationPrinciple =[
  {
    name: '执念缘不浅',
    image: '../../../static/img/bilibili-noface.jpg',
    url: 'https://www.bilibili.com/video/BV1t4411e7LH',
  },
];

const WechatSubscriptions = [
  {
    name: '程序猿DD',
    image: 'http://mmbiz.qpic.cn/mmbiz_png/R3InYSAIZkFgVUuoib3ib7u92WFR247awDicxibIsB4H6gy610wyzicNVf03JIPC63Tu4lHV3iaAc4vDiczQr57kJDJew/0?wx_fmt=png',
    url: 'https://www.bilibili.com/video/BV11s41167h6',
  },
  {
    name: 'Java后端',
    image: 'http://mmbiz.qpic.cn/mmbiz_png/R3InYSAIZkFgVUuoib3ib7u92WFR247awDicxibIsB4H6gy610wyzicNVf03JIPC63Tu4lHV3iaAc4vDiczQr57kJDJew/0?wx_fmt=png',
    url: 'https://www.bilibili.com/video/BV11s41167h6',
  },
  {
    name: 'why技术',
    image: 'http://mmbiz.qpic.cn/mmbiz_png/R3InYSAIZkFgVUuoib3ib7u92WFR247awDicxibIsB4H6gy610wyzicNVf03JIPC63Tu4lHV3iaAc4vDiczQr57kJDJew/0?wx_fmt=png',
    url: 'https://www.bilibili.com/video/BV11s41167h6',
  },
  {
    name: 'Java基基',
    image: 'http://mmbiz.qpic.cn/mmbiz_png/R3InYSAIZkFgVUuoib3ib7u92WFR247awDicxibIsB4H6gy610wyzicNVf03JIPC63Tu4lHV3iaAc4vDiczQr57kJDJew/0?wx_fmt=png',
    url: 'https://www.bilibili.com/video/BV11s41167h6',
  },
  {
    name: 'JavaGuide',
    image: 'http://mmbiz.qpic.cn/mmbiz_png/R3InYSAIZkFgVUuoib3ib7u92WFR247awDicxibIsB4H6gy610wyzicNVf03JIPC63Tu4lHV3iaAc4vDiczQr57kJDJew/0?wx_fmt=png',
    url: 'https://www.bilibili.com/video/BV11s41167h6',
  },
  {
    name: 'CodeSheep',
    image: 'http://mmbiz.qpic.cn/mmbiz_png/R3InYSAIZkFgVUuoib3ib7u92WFR247awDicxibIsB4H6gy610wyzicNVf03JIPC63Tu4lHV3iaAc4vDiczQr57kJDJew/0?wx_fmt=png',
    url: 'https://www.bilibili.com/video/BV11s41167h6',
  },
  {
    name: '良许Linux',
    image: 'http://mmbiz.qpic.cn/mmbiz_png/R3InYSAIZkFgVUuoib3ib7u92WFR247awDicxibIsB4H6gy610wyzicNVf03JIPC63Tu4lHV3iaAc4vDiczQr57kJDJew/0?wx_fmt=png',
    url: 'https://www.bilibili.com/video/BV11s41167h6',
  },
];


function SquareCard({ name, image, url, description }) {
  return (
    <div className="col col--3 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
            {/* <Image img={image} alt={`${name}'s image`} /> */}
            <img src={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function CircleCard({ name, image, url, description }) {
  return (
    <div className={'col col--2 margin-bottom--lg'}>
      <Link to={url}>
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src={image}
            alt={`${name}'s avatar`}
          />
          <div className="avatar__intro">
            <h4 className="avatar__name">{name}</h4>
            {/* <p>{description}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}


export function BookCard() {
  return (
    <div className="row">
      {Books.map((square) => (
        <SquareCard key={square.name} {...square} />
      ))}
    </div>
  );
}

export function NetworkVideoCard() {
  return (
    <div className="row">
      {NetworkVideo.map((circle) => (
        <CircleCard key={circle.name} {...circle} />
      ))}
    </div>
  );
}

export function StructureAndAlgorithmVideoCard() {
  return (
    <div className="row">
      {StructureAndAlgorithmVideo.map((circle) => (
        <CircleCard key={circle.name} {...circle} />
      ))}
    </div>
  );
}

export function WechatSubscriptionsCard() {
  return (
    <div className="row">
      {WechatSubscriptions.map((circle) => (
        <CircleCard key={circle.name} {...circle} />
      ))}
    </div>
  );
}

export function OperatingSystemVideoCard() {
  return (
    <div className="row">
      {OperatingSystemVideo.map((circle) => (
        <CircleCard key={circle.name} {...circle} />
      ))}
    </div>
  );
}

export function ComputerCompositionPrincipleCard() {
  return (
    <div className="row">
      {ComputerCompositionPrinciple.map((circle) => (
        <CircleCard key={circle.name} {...circle} />
      ))}
    </div>
  );
}

export function CompilationPrincipleCard() {
  return (
    <div className="row">
      {CompilationPrinciple.map((circle) => (
        <CircleCard key={circle.name} {...circle} />
      ))}
    </div>
  );
}
