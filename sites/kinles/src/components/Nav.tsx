import { kinlesConfig } from "@/config/site";
import { KinlesMark } from "@/components/icons";

export function Nav() {
  return (
    <header className="site">
      <nav className="wrap nav">
        <a href="#top" className="brand">
          <KinlesMark />
          {kinlesConfig.brand}
        </a>
        <ul className="navlinks">
          {kinlesConfig.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <span className="navphone">
          <a href={kinlesConfig.phoneHref}>{kinlesConfig.phone}</a>
        </span>
        <a className="navcta" href="#kontakt">
          Nezávazná poptávka
        </a>
      </nav>
    </header>
  );
}
