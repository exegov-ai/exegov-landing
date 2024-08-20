import '@/styles/global.css';
import '@fontsource/inter';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
