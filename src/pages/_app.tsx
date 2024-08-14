import React from 'react';
import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';

import { install } from '@twind/core';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  install(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
