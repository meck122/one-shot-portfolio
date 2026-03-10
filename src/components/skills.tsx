const categories = [
  {
    name: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    name: "Frameworks & Tools",
    items: ["FastAPI", "React", "Spring Boot", "AWS", "Terraform", "Docker"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "Oracle Database", "DynamoDB", "OpenSearch"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-glow py-24">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Skills
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.name} className="bento-card">
            <h3 className="text-sm font-semibold text-foreground">
              {cat.name}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-surface-raised px-3 py-1.5 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
