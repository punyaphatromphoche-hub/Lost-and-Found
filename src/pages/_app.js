import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BJS3 Lost & Found - โรงเรียนบรรหารแจ่มใสวิทยา 3</title>
        <meta name="description" content="ระบบแจ้งของหายและค้นหาของที่หาย โรงเรียนบรรหารแจ่มใสวิทยา 3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
