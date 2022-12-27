import { Screensaver } from 'components/screensaver';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Screensaver />
      <Component {...pageProps} />
    </>
  );
}
