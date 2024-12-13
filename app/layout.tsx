"use client"

import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { usePathname } from "next/navigation";
import { TabBar } from "./components/tabBar/tabBar"; 

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  const pathname = usePathname(); // 현재 경로 가져오기
  const isHiddenTabBar = (pathname === "/terms") || (pathname === "/login");

  return (
    <StoreProvider>
      <html lang='en'>
        <body>
          <section className="container">
            <main className={styles.main}>{children}</main>
            {!isHiddenTabBar && (
              <TabBar />
            )}
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
