import NavLink from "../NavLink/NavLink";
import { SignInForm } from "../SignInForm/SignInForm";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Sign up", href: "/auth/signup/" },
  { text: "Sign in", href: "/auth/signin/" },
  { text: "Hotels", href: "/hotels/" },
  { text: "Profile", href: "/profile/" },
  { text: "Map", href: "/map/" },
  { text: "Blog", href: "/blog/" },
  { text: "Travelers", href: "/travelers/" },
  { text: "Privacy policy", href: "/privacy-policy/" },
  { text: "Terms", href: "/terms/" },
  { text: "About Us", href: "/about/" },
];

export default function NavBar() {
  return (
    <nav>
      {MENU_LIST.map((link) => (
        <NavLink text={link.text} href={link.href} key={link.text} />
      ))}
      <SignInForm/>
    </nav>
  );
}
