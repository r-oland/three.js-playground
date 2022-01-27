import { AppProps } from 'next/app';
import React from 'react';
import dynamic from 'next/dynamic';
import '../styles/hotfix.css';

// disable ssr for react suspense API
const Layout = dynamic(() => import('../Layout/Layout'), { ssr: false });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
