import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';

import './styles/globals.css';
import styles from './styles/layout.module.css';
import { Metadata } from 'next';
import { TabBar } from './components/tabBar/tabBar';

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: 'ozzy',
  description: '당신의 감정을 알려주는 일기 서비스',
  keywords: ['감정', '일기', '감정일기', 'AI일기'],
  openGraph: {
    title: 'ozzy',
    description: 'ozzy에 일기를 쓰고 당신의 감정을 알아보세요',
    url: `${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
    siteName: 'ozzy',
    images: [
      {
        url: '/app/icon.ico',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className="container">
            <main className={styles.main}>{children}</main>
            <TabBar />
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
