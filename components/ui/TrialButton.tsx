"use client";

interface TrialButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function TrialButton({ className, children }: TrialButtonProps) {
  return (
    <a
      href="https://crm.overton.in/#/signup"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
