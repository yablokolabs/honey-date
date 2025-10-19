import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';

export const metadata = {
  title: 'Honey Date 💞 - Coming Soon',
  description: 'Where Love Meets Over Coffee & Cocktails. Weekly speed-dating events for working singles in Bangalore.',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'Honey Date 💞 - Coming Soon',
    description: 'Where Love Meets Over Coffee & Cocktails. Weekly speed-dating events for working singles in Bangalore.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'HoneyDate.club'
      }
    ],
    type: 'website',
    locale: 'en_IN',
    siteName: 'HoneyDate.club'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honey Date 💞 - Coming Soon',
    description: 'Where Love Meets Over Coffee & Cocktails. Weekly speed-dating events for working singles in Bangalore.',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        {/* Cloudflare Web Analytics */}
        <script 
          defer 
          src='https://static.cloudflareinsights.com/beacon.min.js' 
          data-cf-beacon='{"token": "0251c16921864eec94293fbd4a78d00b"}'
        ></script>
        {/* End Cloudflare Web Analytics */}
      </head>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}