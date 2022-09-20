import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="128x128" href="favicon.png" />

          <link rel="manifest" href="/manifest.json" />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          {/* 로딩 전 다크모드 적용 */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
;(function () {
  const isCurrentUserDarkMode =  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = localStorage.getItem('preferences') ? JSON.parse(localStorage.getItem('preferences')).isDarkMode : isCurrentUserDarkMode;

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
})();
`,
            }}
          />
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
