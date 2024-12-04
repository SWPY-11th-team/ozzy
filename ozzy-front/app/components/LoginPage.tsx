"use client"

import { Button } from './button/Button'
import { useRouter } from "next/navigation";  // Next.js 라우터 훅 사용

import style from './LoginPage.module.css';

export const LoginPage = (props: any) => {
    const router = useRouter();  // Next.js 라우터 훅 사용
    const navigateToTerms = () => {
        router.push("/terms");
      };
    return (<div className={style.outGrid}>
        <img></img>
        <div className={style.mainText}>
            <h1>
                OZZY에 오신걸 환영해요
            </h1>
        </div>
        <div className={style.description}>
            일기를 작성하고, <br />
            당신만의 감정 지도를 그려보세요
        </div>
    <Button label={'구글로 로그인'} className={style.googleButton}></Button>
    <Button label={'카카오로 로그인'} className={style.kakaoButton}></Button>    

    <button onClick={navigateToTerms}>Go to Terms Page</button>
    </div>
    );
  };
  