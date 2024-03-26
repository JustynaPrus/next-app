"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

type NavItemProps={
  text: string;
  href: string;
}

export default function NavItem({
  text,
  href,
}: NavItemProps) {
  const pathname = usePathname();

  const style =
    pathname === href ? `${styles.link} ${styles.hoverLink}` : `${styles.link}`;

  return (
    <Link className={style} href={href}>
      {text}
    </Link>
  );
}
