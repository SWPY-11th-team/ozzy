"use client"

import {Button} from './button/Button';
import {useRouter} from "next/navigation";  // Next.js 라우터 훅 사용
import {useEffect, useState} from "react";

import style from './LoginPage.module.css';

export const LoginPage = (props: any) => {
    const router = useRouter();  // Next.js 라우터 훅 사용
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);

    const googleLogin = () => {
        // window.location.href = 'http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000&mode=login';
        window.location.href = 'http://www.ozzy-backend.duckdns.org/oauth2/authorization/google?redirect_uri=http://localhost:3000&mode=login';
    };

    const kakaoLogin = () => {
        // window.location.href = 'http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000&mode=login';
        window.location.href = 'http://www.ozzy-backend.duckdns.org/oauth2/authorization/kakao?redirect_uri=http://localhost:3000&mode=login';
    };

    // redirect
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('accessToken');
        const refresh = urlParams.get('refreshToken');

        if (token && refresh) {
            setAccessToken(token);
            setRefreshToken(refresh);
            console.log('accessToken :', token);
            console.log('refresh :', refresh);
            // localStorage.setItem("accessToken", token);
            // localStorage.setItem("refreshToken", refresh);

            navigateToTerms();
        }
    }, []);

    const navigateToTerms = () => {
        router.push("/terms");
    };

    return (
        <div className={style.outGrid}>
            <img></img>
            <div className={style.mainText}>
                <h1>OZZY에 오신걸 환영해요</h1>
            </div>
            <div className={style.description}>
                일기를 작성하고, <br/>
                당신만의 감정 지도를 그려보세요
            </div>
            <Button label={'구글 로그인'} className={style.googleButton} onClick={googleLogin}></Button>
            <Button label={'카카오 로그인'} className={style.kakaoButton} onClick={kakaoLogin}></Button>

            <button onClick={navigateToTerms}>Go to Terms Page</button>
        </div>
    );
};
