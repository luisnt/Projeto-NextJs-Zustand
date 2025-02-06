"use client"
import { redirect, usePathname } from 'next/navigation'
import { Button } from '@/core/components/ui/Button'
import { TitleUser } from '@/core/components/ui/TitleUser'
import useData from '@/core/store'

export function Toolbar() {
  const { data, selectedUser, logoff } = useData()
  const currentPath = usePathname()

  return (
    <div className='min-h-12 bg-gray-100 text-white flex flex-1 items-center space-between px-4 w-full gap-1'>
      <div className='min-h-12 flex flex-1 items-center justify-betweenpx-4 w-full'>
        <div>
          <Button href="https://github.com/luis-portfolio/Projeto-NextJs-Zustand" >Github Repository</Button>
          <Button href="/private/dashboard" visible={currentPath !== '/dashboard' && !!data} >Dashboard</Button>
          <Button href="/private/page1" visible={currentPath !== '/page1' && !!data} >Page 1</Button>
          <Button href="/private/page2" visible={currentPath !== '/page2' && !!data} >Page 2</Button>
        </div>
      </div>
      <TitleUser />
      <Button visible={currentPath !== '/login' && !!!data} href="/login">Login</Button>
      <Button visible={!!data} onClick={logoff} >{selectedUser && (selectedUser?.Nome?.split(" ")[0])} Sair</Button>
    </div>
  );
}