import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global-styles';
import theme from '@/styles/theme';
import 'public/fonts/font.css';
import 'public/fonts/Pretendard/stylesheet.css';
import { DefaultSeo } from 'next-seo';

const DEFAULT_SEO = {
  title: '우주인 ID card',
  description: 'We are the astronauts',
  canonical: 'https://astronaut-sumi.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://astronaut-sumi.vercel.app/',
    title: '우주인 ID card',
    site_name: '우주인 ID card',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/49177223/223789248-9cafb888-e552-42c0-92f2-d383364c3026.png',
        width: 285,
        height: 167,
        alt: 'lumy',
      },
    ],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...DEFAULT_SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
