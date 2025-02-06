"use client"
import { ReactNode, JSX } from 'react'
import useOnNoAuth from '@/core/hooks/useOnNoAuth';

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps): JSX.Element => {
  useOnNoAuth('/login');

  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center font-[family-name:var(--font-geist-sans)] h-screen w-screen">
      {children}
    </div>
  );
};

export default PrivateLayout;
