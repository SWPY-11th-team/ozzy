"use client";

import { useEffect, useState } from "react";
import IndexClient from "./IndexClient";

export default function IndexPage() {
  const [isClient, setIsClient] = useState(false);

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
    </div>
  );
}
