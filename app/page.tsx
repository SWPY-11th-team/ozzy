"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // next/navigation 사용
import IndexClient from "./IndexClient";
import { TabBar } from "./components/tabBar/tabBar";

export default function IndexPage() {
  const [isClient, setIsClient] = useState(false);
    const pathname = usePathname(); // 현재 경로 가져오기
    const isHiddenTabBar =
      pathname.startsWith('/terms') || // /terms 및 하위 경로 포함
      pathname === '/login' ||
      pathname === '/nickname';

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // 클라이언트에서만 실행되도록 설정
    }
  }, []);

  if (!isClient) {
    return null; // 서버에서 렌더링할 때는 아무것도 표시하지 않음
  }

  return (
    <div>
      <IndexClient />
      {!isHiddenTabBar && <TabBar />}
    </div>
  );
}
