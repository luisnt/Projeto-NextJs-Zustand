import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode
}
export function Title({ children }: TitleProps) {
  return (<div className='font-bold text-4xl text-center text-[#333]'>{children}</div>)
}

