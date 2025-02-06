'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useData from '@/core/store';

// Este hook deve ser usado apenas em componentes do cliente
const useOnNoAuth = (redirectUrl: string) => {
  const router = useRouter();
  const { data } = useData();

  useEffect(() => {
    if (typeof window !== 'undefined' && !data) {
      router.push(redirectUrl);
    }
  }, [data, router, redirectUrl]);
};

export default useOnNoAuth;