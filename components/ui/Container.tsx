interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-[1280px]
        mx-auto
         px-4
        sm:px-6
        lg:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}
