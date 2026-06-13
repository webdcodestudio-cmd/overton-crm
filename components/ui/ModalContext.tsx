"use client";

import { createContext, useContext, useState } from "react";
import StartModal from "./StartModal";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
      <StartModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </ModalContext.Provider>
  );
}