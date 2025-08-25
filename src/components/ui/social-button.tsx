import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  provider: 'google' | 'linkedin';
  children: ReactNode;
}

export function SocialButton({
  className,
  icon,
  provider,
  children,
  ...props
}: SocialButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-3 w-full px-6 py-3',
        'bg-white border border-gray-300 rounded-lg text-sm text-gray-700',
        'hover:bg-gray-50 hover:border-gray-400 transition-all duration-200',
        'focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500',
        className
      )}
      {...props}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      <span className="font-medium">{children}</span>
    </button>
  );
}
