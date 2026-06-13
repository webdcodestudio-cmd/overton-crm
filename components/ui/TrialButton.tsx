"use client";

import { useModal } from "./ModalContext";

interface TrialButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function TrialButton({ className, children }: TrialButtonProps) {
  const { openModal } = useModal();

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
