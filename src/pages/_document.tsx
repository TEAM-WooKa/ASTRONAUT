import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>우주인 ID card</title>
          <meta name="description" content="We are the astronauts" />
          <meta
            name="keywords"
            content="우주인,swyg,우주인 ID card,메타콘텐츠"
          />

          <meta charSet="utf-8" />
          <meta name="og:site_name" content="우주인 ID card" />
          <meta name="og:title" content="우주인 ID card" />
          <meta name="og:description" content="We are the astronauts" />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="https://astronaut-sumi.vercel.app/" />
          <meta
            name="og:image"
            content="https://user-images.githubusercontent.com/49177223/224251439-1ea7a315-6c13-4121-9c6d-451512f78410.png"
          />
          <meta name="twitter:title" content="우주인 ID card" />
          {/* Icon Tag */}
          <link rel="apple-touch-icon" href="/logos/favicon.ico" />
          <link rel="shortcut icon" href="/logos/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
