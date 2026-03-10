const jobs = [
  {
    company: "ZoomInfo",
    title: "Software Engineer III, TalentOS",
    location: "Austin, TX",
    dates: "Jan 2026 – Present",
    bullets: [
      "Joined as second engineer on an incubator-stage agentic AI recruiting platform. Led database schema design for email campaigns and templates system, authoring a formal design document. Drove adoption of final design integrating with multi-tenant access control and message tracking infrastructure.",
      "Built end-to-end candidate review system with bulk approve/reject flows, wiring React mutation hooks with optimistic UI updates to idempotent FastAPI endpoints with comprehensive test coverage.",
      "Created mock service layer for local development (Gmail OAuth + agentic AI platform), enabling full workflow testing without external API dependencies, with prod safety validators preventing accidental enablement.",
    ],
  },
  {
    company: "Cisco",
    title: "Software Engineer II, CX Cloud Commerce & SORA",
    location: "Austin, TX",
    dates: "Jul 2023 – Jan 2026",
    bullets: [
      "Owned production rollout of a new query engine for IOS projects on SORA, driving 64% reduction in average query wait time (~2 hrs → ~45 min); led stakeholder communication, bug triage, and feature flag sequencing across 100+ projects.",
      "Designed and implemented a state tracking data model to manage query lifecycle visibility in the new pipeline, and built a validation layer to ensure output parity between new and legacy systems.",
      "Led implementation of AWS OpenSearch indexing and multi-threaded Change Data Capture pipeline using Kinesis to sync order and subscription data between DynamoDB and OpenSearch; provisioned and deployed the cluster with Terraform.",
      "Built order data persistence in DynamoDB for the Commerce API, developed endpoints for test data injection, and introduced order fixtures to streamline testing in non-prod environments.",
      "Reduced role grant API calls to Communities by over 90% using Postgres Flyway migrations to store role grants locally, and replaced legacy database triggers with JPA for improved audit date management.",
      "Upgraded Consumption Spring Boot API through major version bumps: Spring Boot 2.7→3.3, Java 11→17, AWS SDK v1→v2, Hibernate 5→6.",
      "Mentored a new graduate engineer on Spring, Docker, and AWS fundamentals, accelerating onboarding and improving technical contributions.",
    ],
  },
  {
    company: "Amazon",
    title: "Software Engineering Intern, Brand Experience",
    location: "Phoenix, AZ",
    dates: "Summer 2022",
    bullets: [
      "Architected and implemented backend for the Brand Customer Review Homepage Card using Lambda, DynamoDB, and S3, with a projected revenue impact of $271.15 per contact action.",
      "Designed and implemented a daily backfill pipeline using Glue, Lambda, S3, and DynamoDB to calculate actionable, critical reviews from RDS data. Provisioned infrastructure with AWS CDK.",
      "Leveraged CloudWatch for comprehensive logging, enabling real-time monitoring and troubleshooting.",
    ],
  },
  {
    company: "Zoom",
    title: "Software Engineering Intern, Zoom Phone DevOps",
    location: "Remote (San Jose, CA)",
    dates: "Summer 2021",
    bullets: [
      "Built a Python CLI tool to synchronize data center and IP information from a cloud-based spreadsheet to NetBox (a DCIM tool) using its RESTful API.",
      "Gained hands-on experience with DevOps tools and concepts, including Docker, Jenkins, and CI/CD pipelines.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Experience
        </h2>
        <div className="mt-10 space-y-12">
          {jobs.map((job) => (
            <div key={job.company} className="relative pl-6 border-l border-border">
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {job.company}
                  </h3>
                  <p className="text-sm text-muted">{job.title}</p>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p>{job.dates}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-muted before:mr-2 before:text-border before:content-['—']"
                  >
                    {bullet}
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
