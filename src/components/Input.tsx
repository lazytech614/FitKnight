import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-fit p-2 border border-gray-300 rounded-lg outline-none ${className}`}
      {...props}
    />
  );
}
