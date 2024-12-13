"use client";

import { Button } from "../components/button/Button";
import { useRouter, useSearchParams } from "next/navigation"; // Next.js 라우터 훅 사용

import style from "./LoginPage.module.css";
import { TabBar } from "../components/tabBar/tabBar";
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
    if (!process.env.NEXT_PUBLIC_API_URL || !process.env.NEXT_PUBLIC_REDIRECT_URI) {
      console.error("환경 변수가 설정되지 않았습니다.");
      return;
    }
    
    const tokenFromLocalStorage = localStorage.getItem("accessToken");
  
    if (tokenFromLocalStorage) {
      console.log("이미 로그인된 사용자, /dashboard로 이동");
      router.push("/diaryInput");
      return; 
    }
  
    const tokenFromURL = searchParams.get("accessToken");
    const refreshTokenFromURL = searchParams.get("refreshToken");
  
    if (tokenFromURL && refreshTokenFromURL) {
      localStorage.setItem("accessToken", tokenFromURL);
      localStorage.setItem("refreshToken", refreshTokenFromURL);
      setAccessToken(tokenFromURL);
      setRefreshToken(refreshTokenFromURL);

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
    </div>
  );
};

export default LoginPage;