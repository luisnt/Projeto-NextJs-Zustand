import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  bgColor?: string;
  bgColorHover?: string;
  color?: string;
  colorHover?: string;
  href?: string;
  children: ReactNode;
  visible?: boolean;
  onClick?: () => void;
};

export function Button({ href, children, visible, onClick, bgColor, bgColorHover, color, colorHover, }: ButtonProps) {

  if (visible !== undefined && !visible) return null

  return (
    <Link
      className={`btn btn-primary px-4 py-2 rounded-full ${color || "text-white"} ${bgColor || "bg-blue-500"} hover:${bgColorHover || "bg-blue-700"}`}
      href={href ? href : '#'}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
