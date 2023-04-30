import 'public/fonts/font.css';
import 'public/fonts/Pretendard/stylesheet.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/global-styles';
import theme from '@/styles/theme';

const DEFAULT_SEO = {
  title: '우주인 ID card',
  description: 'We are the astronauts',
  canonical: 'https://astronaut-id-card.swygbro.com',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://astronaut-id-card.swygbro.com',
    title: '우주인 ID card',
    site_name: '우주인 ID card',
    images: [
      {
        url: '/thumbnail.png',
        width: 285,
        height: 214,
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
