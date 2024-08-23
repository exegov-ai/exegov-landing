import '@/styles/global.css';
import '@fontsource/inter';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="beforeInteractive"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}
        />
        <Script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
