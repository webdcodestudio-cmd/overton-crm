import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  onClick,
  className = "",
}: ButtonProps) {

  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-brand text-white hover:opacity-90 shadow-sm",
    outline: "border border-gray-300 text-dark hover:border-brand hover:text-brand bg-white",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-2.5",
    lg: "text-base px-7 py-3",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}