export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </h2>
        <p className="mt-4 text-muted">
          Interested in working together? Reach out.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
          <a
            href="mailto:liaozhoudi@gmail.com"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            liaozhoudi@gmail.com
          </a>
          <a
            href="https://github.com/meck122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            github.com/meck122
          </a>
          <a
            href="https://linkedin.com/in/hiimmarkliao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            linkedin.com/in/hiimmarkliao
          </a>
        </div>
      </div>
      <footer className="mx-auto mt-24 max-w-3xl border-t border-border pt-6 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Mark Liao
      </footer>
    </section>
  );
}
