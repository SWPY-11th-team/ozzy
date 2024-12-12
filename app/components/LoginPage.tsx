"use client";

import { Button } from "./button/Button";
import { useRouter, useSearchParams } from "next/navigation"; // Next.js 라우터 훅 사용

import style from "./LoginPage.module.css";
import { TabBar } from "./tabBar/tabBar";
import { useEffect, useState } from "react";

export const LoginPage = (props: any) => {
  const router = useRouter(); // Next.js 라우터 훅 사용
  const searchParams = useSearchParams();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const handleGoogleLogin = () =>
    router.push(
      `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&mode=login`
    );

  const handleKakaoLogin = () =>
    router.push(
      `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&mode=login`
    );

  const navigateToTerms = () => {
    router.push("/terms");
  };

  useEffect(() => {
    const token = searchParams.get("accessToken");
    const refresh = searchParams.get("refreshToken");

    if (token && refresh) {
      // 여기서 setAccessToken과 setRefreshToken은
      // 상태 관리 라이브러리나 컨텍스트를 통해 처리해야 합니다.
      console.log("accessToken :", token);
      console.log("refresh :", refresh);

      // Next.js의 라우터를 사용하여 페이지 이동
      router.push("/terms");
    }
  }, [searchParams, router]);

  return (
    <div className={style.outGrid}>
      <img></img>
      <div className={style.mainText}>
        <h1>OZZY에 오신걸 환영해요</h1>
      </div>
      <div className={style.description}>
        일기를 작성하고, <br />
        당신만의 감정 지도를 그려보세요
      </div>
      <Button
        label={"구글로 로그인"}
        className={style.googleButton}
        onClick={handleGoogleLogin}
      />
      <Button
        label={"카카오로 로그인"}
        className={style.kakaoButton}
        onClick={handleKakaoLogin}
      />

      <button onClick={navigateToTerms}>Go to Terms Page</button>
    </div>
  );
};
