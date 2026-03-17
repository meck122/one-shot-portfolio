export default function Education() {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Education
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="bento-card sm:col-span-2">
          <h3 className="text-base font-semibold text-foreground">
            University of Texas at Austin
          </h3>
          <p className="mt-1 text-sm text-muted">
            B.S. Electrical and Computer Engineering, High Honors
          </p>
          <p className="mt-1 text-sm text-muted/70">GPA: 3.92 | Aug 2019 – May 2023</p>
        </div>
        <div className="bento-card">
          <h3 className="text-sm font-semibold text-foreground">Coursework</h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[
              "Algorithms",
              "Software Architecture",
              "Embedded Systems",
              "Data Science",
              "Software Design & Implementation",
              "Software Engineering Lab",
            ].map((course) => (
              <span
                key={course}
                className="rounded-md bg-surface-raised px-2.5 py-1 text-xs text-muted/80"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
