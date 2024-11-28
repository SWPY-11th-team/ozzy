import type { Metadata } from "next";
import IndexClient from "./IndexClient"; // 클라이언트 컴포넌트 임포트

export default function IndexPage() {
  return (
    <div>
      <IndexClient /> {/* 클라이언트 컴포넌트를 렌더링 */}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Ozzy - Your own feeling journey",
};
