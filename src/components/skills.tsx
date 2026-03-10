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
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Skills
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-semibold text-foreground">
                {cat.name}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
