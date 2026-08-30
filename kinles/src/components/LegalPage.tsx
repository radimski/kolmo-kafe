import Link from "next/link";
import type { Section } from "@websites/legal-cz";

export function LegalPage({
  title,
  intro,
  sections,
  children,
}: {
  title: string;
  intro: string;
  sections: Section[];
  children?: React.ReactNode;
}) {
  return (
    <main className="wrap legal-page">
      <Link href="/" className="legal-back">
        ← Zpět na úvod
      </Link>
      <h1>{title}</h1>
      <p className="legal-intro">{intro}</p>

      {children}

      {sections.map((section) => (
        <section className="legal-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.blocks.map((block, index) =>
            block.kind === "p" ? (
              <p key={index}>{block.text}</p>
            ) : (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ),
          )}
        </section>
      ))}
    </main>
  );
}
