import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'red' | 'green' | 'ghost' | 'white';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:opacity-50';

const variants: Record<Variant, string> = {
  red: 'bg-brand-red text-white hover:bg-brand-red/90',
  green: 'border border-brand-green text-white hover:bg-brand-green/15',
  ghost: 'border border-white/30 text-white hover:bg-white/10',
  white: 'bg-white text-black hover:bg-white/90',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-xs',
  lg: 'h-12 px-6 text-sm',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'ghost',
  size = 'md',
  withArrow = true,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      <span>{children}</span>
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
