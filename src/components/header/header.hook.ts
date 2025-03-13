'use client';

import { useRouter } from 'next/navigation';

export function useHeaderHook() {
    const router = useRouter();

    const onClickHome = () => {
        router.push('/');
    };

    return {
        onClickHome
    };
}