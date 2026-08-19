"use client";

import { useModal } from "./ModalContext";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  openModal?: boolean; // ← Naya prop
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  onClick,
  className = "",
  openModal: shouldOpenModal = false,
}: ButtonProps) {
  const { openModal } = useModal();

  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-brand text-white hover:opacity-90 shadow-sm",
    outline:
      "border border-gray-300 text-dark hover:border-brand hover:text-brand bg-white",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-2.5",
    lg: "text-base px-7 py-3",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  // Agar openModal prop hai — click pe modal open karo
  const handleClick = () => {
    if (shouldOpenModal) {
      openModal();
    }
    onClick?.();
  };

  // Agar openModal prop hai — Link nahi, button use karo
  if (shouldOpenModal) {
    return (
      <button onClick={handleClick} className={classes}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={classes}>
      {children}
    </button>
  );
}