import { kolmoConfig } from "@/config/site";

export function KolmoDictionary() {
  const { headword, pronunciation, footnote, senses } =
    kolmoConfig.nameDictionary;

  return (
    <aside className="kolmo-dict" aria-label={`Význam názvu ${headword}`}>
      <div className="kolmo-dict-head">
        <p className="kolmo-dict-word">{headword}</p>
        <p className="kolmo-dict-pron">{pronunciation}</p>
      </div>
      <ol className="kolmo-dict-senses">
        {senses.map((sense) => (
          <li key={sense.term}>
            <span className="kolmo-dict-term">{sense.term}</span>
            <span className="kolmo-dict-def">{sense.definition}</span>
          </li>
        ))}
      </ol>
      {footnote ? <p className="kolmo-dict-footnote">{footnote}</p> : null}
    </aside>
  );
}
