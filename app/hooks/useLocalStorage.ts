import { useEffect, useState } from 'react';

export const useLocalStorage = () => {
    const [value, setValue] = useState<string|null>(null);

    useEffect(() => {
        // 클라이언트 사이드에서만 localStorage에 접근
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem('accessToken');
            setValue(storedValue);
        }
    }, []);

    return value;
};