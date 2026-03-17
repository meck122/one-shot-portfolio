interface Job {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
}

const allJobs: Job[] = [
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

export { allJobs };

export default function Experience({ jobs = allJobs }: { jobs?: Job[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Experience
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="bento-card flex flex-col"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-foreground">{job.company}</h3>
                <p className="mt-0.5 text-sm text-accent/80">{job.title}</p>
              </div>
              <div className="shrink-0 text-right text-xs text-muted/70">
                <p>{job.dates}</p>
                <p>{job.location}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 flex-1">
              {job.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-muted pl-4 relative before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-accent/30"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
