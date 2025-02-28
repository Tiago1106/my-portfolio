import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  blank?: boolean;
}

export default function Button({
  label,
  href,
  onClick,
  className = "",
  icon,
  disabled = false,
  blank = false,
}: ButtonProps) {
  
  const baseClasses = className.includes('bg-') ? 
    "px-4 py-2 flex items-center gap-2 rounded-lg transition-all cursor-pointer" :
    "py-2 flex items-center gap-2 rounded-lg transition-all cursor-pointer";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  const buttonContent = (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses} ${className}`}
      aria-label={label}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );

  return href ? (
    <Link href={href} className="no-underline" target={blank ? "_blank" : "_self"} rel="noopener noreferrer">
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
}
