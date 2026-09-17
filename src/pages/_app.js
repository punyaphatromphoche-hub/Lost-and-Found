import '@/styles/globals.css';
import Head from 'next/head';
import BottomNav from '@/components/BottomNav';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BJ3 Lost & Found - ระบบแจ้งของหาย โรงเรียน BJ3</title>
        <meta name="description" content="ระบบแจ้งของหายและค้นหาของที่หาย โรงเรียน BJ3 (บรรหารแจ่มใสวิทยา 3)" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover, user-scalable=yes"
        />
        {/* Apple iOS Web App Support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BJ3 Lost" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        {/* Android & PWA Theme Color */}
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        {/* Prevent automatic phone number linking styling bugs */}
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <div className="flex flex-col min-h-screen pb-16 md:pb-0">
        <Component {...pageProps} />
        <BottomNav />
      </div>
    </>
  );
}
