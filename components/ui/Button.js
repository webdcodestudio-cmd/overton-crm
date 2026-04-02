import Link from "next/link";
import styles from "./Button.module.css";

// variant = "primary" | "ghost" | "outline" | "dark" | "white"
// size = "sm" | "md" | "lg"

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) {
  // CSS classes combine karna
  // styles.btn = base class (hamesha)
  // styles[variant] = primary/ghost/outline/dark/white
  // styles[size] = sm/md/lg
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  // Href hai → Link bana do
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Href nahi → Button bana do
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}