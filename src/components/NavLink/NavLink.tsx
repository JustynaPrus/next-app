"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavLink.module.css";

type NavItemProps={
  href: string;
  text: string;
}

export default function NavItem({
  href,
  text,
}: NavItemProps) {
  const pathname = usePathname();

  const style =
    pathname === href
? `${styles.link} ${styles.hoverLink}`
: `${styles.link}`;

  return (
    <Link className={style} href={href}>
      {text}
    </Link>
  );
}
