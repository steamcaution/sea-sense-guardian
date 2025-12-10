import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { AppPageLayoutProps } from '@/layout/wrapper.types';
import { NextPage } from 'next';
import '../styles/_base.scss';
import { createAppCache } from '@/lib/create-emotion-cache';
import { FloatingButton } from '@components/floating';
import { getAssetPath } from '@/lib/getAssertPath';

export type NextPageWithLayout<P = AppPageLayoutProps, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, props: AppPageLayoutProps) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

const clientSideEmotionCache = createAppCache();

export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link
          rel="preload"
          href={getAssetPath('/fonts/BookkMyungjo_Light.woff')}
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <style>
          {`
          :root {
            --asset-prefix: '${assetPrefix}';
          }
        `}
        </style>
        <title>Sea Sense</title>
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
      <FloatingButton />
    </CacheProvider>
  );
}
