import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
      </Head>
      <body style={{ display: "block" }}>
        <Main />
        <script type="module" dangerouslySetInnerHTML={{
          __html: `
          import { defineCustomElements } from "/scripts/stencil-components/loader/index.js";
          defineCustomElements(window);
          `
        }} />
        <NextScript />
      </body>
    </Html>
  )
}
