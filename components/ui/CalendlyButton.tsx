"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

interface CalendlyButtonProps {
  text: string;
  className?: string;
}

export default function CalendlyButton({
  text,
  className = "",
}: CalendlyButtonProps) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  if (!rootElement) return null;

  return (
    <PopupButton
      url="https://calendly.com/overton-info/30min"
      rootElement={rootElement}
      text={text}
      className={className}
    />
  );
}
