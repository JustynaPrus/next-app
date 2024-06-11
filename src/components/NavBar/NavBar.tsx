import NavLink from "../NavLink/NavLink";
import { getDictionary } from "../../../get-dictionary";

export default async function NavBar({
  lang,
}: { lang: "en" | "pl-PL" }) {
  const dict = await getDictionary(lang);

  
  const MENU_LIST = [
    { text: dict.home, href: "/" },
    { text: dict.signUp, href: "/auth/signup/" },
    { text: dict.signIn, href: "/auth/signin/" },
    { text: dict.signOut, href: "/auth/signout/" },
    { text: dict.hotels, href: "/hotels/" },
    { text: dict.cart, href: "/cart/" },
    { text: dict.profile, href: "/profile/" },
    { text: dict.map, href: "/map/" },
    { text: dict.blog, href: "/blog/" },
    { text: dict.travelers, href: "/travelers/" },
    { text: dict.privacyPolicy, href: "/privacy-policy/" },
    { text: dict.terms, href: "/terms/" },
    { text: dict.aboutUs, href: "/about/" },
  ];

  return (
    <nav>
      {MENU_LIST.map((link) => (
        <NavLink key={link.text} href={link.href} text={link.text} />
      ))}
    </nav>
  );
}
