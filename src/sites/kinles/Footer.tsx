import Link from "next/link";
import { kinlesConfig } from "./config";

export function KinlesFooter() {
  return (
    <footer className="site">
      <div className="wrap foot-row">
        <span>
          © {new Date().getFullYear()} {kinlesConfig.name} · IČO{" "}
          {kinlesConfig.ico} · {kinlesConfig.street}, {kinlesConfig.zip}{" "}
          {kinlesConfig.city}
        </span>
        <span className="foot-links">
          {kinlesConfig.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <Link href="/">← Workspace</Link>
        </span>
      </div>
    </footer>
  );
}
