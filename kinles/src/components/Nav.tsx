"use client";

import { useState } from "react";
import { kinlesConfig } from "@/config/site";
import { KinlesMark } from "@/components/icons";

export function Nav() {
  const [open, setOpen] = useState(false);

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
        <a className="navcta navcta-desktop" href="#kontakt">
          Nezávazná poptávka
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="kinles-mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Zavřít" : "Menu"}
        </button>
      </nav>
      <div
        id="kinles-mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <ul>
          {kinlesConfig.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-actions">
          <a className="btn btn-primary" href={kinlesConfig.phoneHref}>
            Zavolat {kinlesConfig.phone}
          </a>
          <a
            className="btn btn-ghost"
            href="#kontakt"
            onClick={() => setOpen(false)}
          >
            Nezávazná poptávka
          </a>
        </div>
      </div>
    </header>
  );
}
