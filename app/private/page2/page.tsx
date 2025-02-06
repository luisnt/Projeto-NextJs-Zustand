'use client'
import { Title } from '@/core/components/ui/Title';
import { Display } from '@/core/components/ui/Display';
import useOnNoAuth from '@/core/hooks/useOnNoAuth';

export default function Page2() {
  useOnNoAuth('/login');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Title>Pagina 2</Title>
        <Display />
      </main>
    </div>
  );
}