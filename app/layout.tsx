import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { LoginPage } from "./components/LoginPage";
import { Metadata } from "next";

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: "ozzy",
  description: "당신의 감정을 알려주는 일기 서비스",
  keywords: ["감정", "일기", "감정일기", "AI일기"],
  openGraph: {
    title: "ozzy",
    description: "ozzy에 일기를 쓰고 당신의 감정을 알아보세요",
    url: "https://delightful-fairy-4f6927.netlify.app/",
    siteName: "ozzy",
    images: [
      {
        url: "/app/icon.ico",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body>
          <section className={styles.container}>
            <main className={styles.main}>{children}</main>
            {/* <footer className={styles.footer}></footer> */}
          </section>
          {/* <script
            defer
            src='https://cdn.swygbro.com/public/widget/swyg-widget.js'
          ></script> */}
        </body>
      </html>
    </StoreProvider>
  );
}
