import { useEffect } from 'react';
import Router from 'next/router';
// Load Typeface Fonts
import 'typeface-dm-sans';
import 'typeface-bree-serif';
import 'typeface-roboto-slab';


// Load other package css file
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeComplete');
  }, []);

  return <Component {...pageProps} />;
}
