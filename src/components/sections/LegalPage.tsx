interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: { heading: string; content: string }[];
}

export function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="bg-ca-dark min-h-screen py-24">
      <article className="max-w-3xl mx-auto px-6 md:px-8">
        <header className="mb-12">
          <div className="text-base font-semibold tracking-widest uppercase text-ca-muted mb-3">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-ca-text">{title}</h1>
          <p className="text-lg text-ca-muted">Last updated: {lastUpdated}</p>
        </header>
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.heading} className="border-t border-ca-border pt-8" aria-labelledby={s.heading.replace(/\s+/g, "-")}>
              <h2 id={s.heading.replace(/\s+/g, "-")} className="text-2xl font-bold text-ca-text mb-4">{s.heading}</h2>
              <p className="text-lg md:text-xl text-ca-muted leading-relaxed">{s.content}</p>
            </section>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-ca-border text-lg text-ca-muted">
          Questions? Contact us at{" "}
          <a href="mailto:legal@collectiveaudience.co" className="text-ca-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ca-blue">
            legal@collectiveaudience.co
          </a>
        </div>
      </article>
    </main>
  );
}
