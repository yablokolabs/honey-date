import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';

export const metadata = {
  title: 'Honey Date 💞 - Coming Soon',
  description: 'Where Love Meets Over Coffee & Cocktails. Weekly speed-dating events for working singles in Bangalore.',
  openGraph: {
    title: 'Honey Date 💞 - Coming Soon',
    description: 'Where Love Meets Over Coffee & Cocktails. Weekly speed-dating events for working singles in Bangalore.',
    images: [
      {
        url: '/og-image.jpg',
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
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
