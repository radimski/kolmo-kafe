import { kinlesConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="wrap" style={{ padding: "6rem 0", textAlign: "center" }}>
      <p className="eyebrow">404</p>
      <h1 style={{ marginTop: "1rem", fontSize: "2rem" }}>Stránka nenalezena</h1>
      <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
        Odkaz je neplatný nebo stránka už neexistuje.
      </p>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        <a className="btn btn-primary" href="/">
          Domů
        </a>
        <a className="btn btn-ghost" href="#kontakt">
          Kontakt
        </a>
        <a href={kinlesConfig.phoneHref} style={{ fontWeight: 600 }}>
          Zavolat {kinlesConfig.phone}
        </a>
      </div>
    </main>
  );
}
