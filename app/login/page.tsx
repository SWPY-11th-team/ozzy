'use client';

import { Suspense } from 'react';
import LoginHandler from './LoginHandler'; // 별도의 클라이언트 컴포넌트

import style from './LoginPage.module.css';
const LoginPage = (props: any) => {
  return (
    <div className={style.outGrid}>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginHandler />
      </Suspense>
    </div>
  );
};

export default LoginPage;
