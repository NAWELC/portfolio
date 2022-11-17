import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang ="fr">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" />
      <link href="https://fonts.googleapis.com/css2?family=Alkalami&display=swap" rel="stylesheet" />
      <script defer src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}
