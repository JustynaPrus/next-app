import NavLink from "../NavLink/NavLink";

import styles from "./Footer.module.css";

const FOOTER_LIST = [
  { text: "Privacy policy", href: "/privacy-policy/" },
  { text: "Terms", href: "/terms/" },
  { text: "About Us", href: "/about/" },
];

export default function Footer() {

  return (
    <footer className={styles.footer}>
      {FOOTER_LIST.map((link) => (
        <NavLink key={link.text} href={link.href} text={link.text} />
      ))}
    </footer>
  );
}
