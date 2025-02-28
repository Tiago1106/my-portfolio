import React from 'react';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, href, onClick, className }: ButtonProps) {
  const buttonContent = (
    <button
      className={`px-4 py-2 text-gray-900 cursor-pointer hover:text-gray-700 rounded-lg ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return href ? (
    <a href={href} className="no-underline p-0">
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
}