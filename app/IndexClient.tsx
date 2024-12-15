'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // next/navigation 사용

import { Card } from './components/card/Card';
import { Button } from './components/button/Button';
import { ButtonEmpty } from './components/button/buttonEmpty';
import { CircleButton } from './components/button/circleButton';
import { WeekCalender } from './components/weekCalender/weekCalendar';
import LoginPage from './login/page';

export default function IndexClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 클라이언트에서만 실행되도록 분기 처리
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null; // 서버에서 렌더링될 때는 아무것도 표시하지 않음
  }

  return <LoginPage />;
}
