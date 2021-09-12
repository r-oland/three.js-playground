import { AppProps } from 'next/app';
import Layout from '../Layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
