import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const blogData = [
  {
    id: "cherry-blossom",
    url:
      "https://web-dev.tech/front-end/javascript/cherry-blossom-petal-falling-effect/",
    imgUrl: (
      <StaticImage
        src="../img/cherry-blossom-thumbnail.png"
        alt="JSとCSSで桜を降らせるエフェクトを実装する方法【コピペOK】"
        loading="lazy"
      />
    ),
  },
  {
    id: "autumn-leaves",
    url:
      "https://web-dev.tech/front-end/javascript/autumn-leaves-falling-effect/",
    imgUrl: (
      <StaticImage
        src="../img/thumbnail-autumn-leaves.png"
        alt="JSとCSSで落ち葉をひらひらと舞わせるエフェクトを実装する方法"
        loading="lazy"
      />
    ),
  },
  {
    id: "snow-fall",
    url: "https://web-dev.tech/front-end/javascript/snow-falling-effect/",
    imgUrl: (
      <StaticImage
        src="../img/winter-snow-falling-effect-thumbnail.png"
        alt="JSとCSSで雪を降らせるエフェクトを実装する方法"
        loading="lazy"
      />
    ),
  },
  {
    id: "heart-button",
    url: "https://web-dev.tech/front-end/css/show-heart-button-css/",
    imgUrl: (
      <StaticImage
        src="../img/heart-button-thumbnail.png"
        alt="【CSSのみ】ホバーするとハートがふわっと浮かび上がるボタンを実装する方法"
        loading="lazy"
      />
    ),
  },
  {
    id: "3d-button",
    url: "https://web-dev.tech/front-end/css/3d-button/",
    imgUrl: (
      <StaticImage
        src="../img/thumbnail-3d-button.png"
        alt="【コピペOK】CSSで立体感のあるボタンを作成する方法"
        loading="lazy"
      />
    ),
  },
  {
    id: "pulse-button",
    url: "https://web-dev.tech/front-end/css/pulse-button-animation/",
    imgUrl: (
      <StaticImage
        src="../img/pulse-button-thumbnail.png"
        alt="【CSS】ボタンから波紋が広がっていくエフェクトを実装する方法"
        loading="lazy"
      />
    ),
  },

  {
    id: "calc-font",
    url: "https://web-dev.tech/front-end/css/responsive-font-size-calc-vw/",
    imgUrl: (
      <StaticImage
        src="../img/calc-vw-font.png"
        alt="【CSS】calcとvwを併用して最大・最小フォントサイズを設定する方法【IE11対応】"
        loading="lazy"
      />
    ),
  },
  {
    id: "learn-sass",
    url: "https://web-dev.tech/front-end/sass/how-to-learn-sass/",
    imgUrl: (
      <StaticImage
        src="../img/sass-learning-materials.png"
        alt="【脱初心者】Sass・Flexbox・Gridなどを学べる28時間超えのUdemyコースを紹介します！"
        loading="lazy"
      />
    ),
  },
  {
    id: "bubble",
    url: "https://web-dev.tech/front-end/javascript/floating-bubbles-js-css/",
    imgUrl: (
      <StaticImage
        src="../img/js-bubble-thumbnail.png"
        alt="JSとCSSでふわふわと漂う泡のアニメーションを実装する方法【自作＆jQueryなし】"
        loading="lazy"
      />
    ),
  },
  {
    id: "js-marker",
    url: "https://web-dev.tech/front-end/javascript/js-scroll-marker/",
    imgUrl: (
      <StaticImage
        src="../img/js-scroll-marker.png"
        alt="【CSS&JS】スクロールに合わせて蛍光ペン風マーカーを引く方法"
        loading="lazy"
      />
    ),
  },
  {
    id: "calc-vh",
    url: "https://web-dev.tech/front-end/javascript/setting-100vh-with-css-js/",
    imgUrl: (
      <StaticImage
        src="../img/thumbnail-set-100vh-css-js.png"
        alt="【JS&CSS】スマホのアドレスバー・ツールバーを除いた100vhの値を指定する方法"
        loading="lazy"
      />
    ),
  },
  {
    id: "scroll-hint",
    url: "https://web-dev.tech/front-end/javascript/scrollhint-js-library/",
    imgUrl: (
      <StaticImage
        src="../img/thumbnail-scrollhint.png"
        alt="横スクロール可能な要素にヒントを表示するJSライブラリ「ScrollHint」の使い方"
        loading="lazy"
      />
    ),
  },
]

export default blogData
