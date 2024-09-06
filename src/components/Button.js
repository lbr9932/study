import Link from "next/link";
import "../styles/components/button.scss";

export function ButtonLink({ href, className, children }) {
  return (
    <Link href={href} className={className || "btn"} passHref>
      {children}
    </Link>
  );
}

export function Button({ children, className, onClick }) {
  return (
    <button className={className || "btn"} onClick={onClick}>
      {children}
    </button>
  );
}
export function ButtonGroup({ children, align, className }) {
  return (
    <div
      className={
        "btn-group" + (align && ` btn-group--${align}`) + ` ${className}`
      }
    >
      {children}
    </div>
  );
}
