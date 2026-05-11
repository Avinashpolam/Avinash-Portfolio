import { motion } from "framer-motion";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

const jobs: Job[] = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Developer",
    period: "Aug 2024 – Present",
    location: "USA",
    description:
      "Engineered production-grade microservices using Java 17, Spring Boot, and PostgreSQL, integrating RESTful APIs with Prometheus and Grafana to cut daily sync time by 19 hours across 5 global platforms. Streamlined CI/CD automation with GitLab, Docker, and Terraform with embedded scans and rollback logic, reducing release cycles by 3.5 hours. Designed an LLM-powered parser by integrating OpenAI APIs, scikit-learn, and LangChain into a Java backend to extract insights from 12,000+ documents and reduce legal review time by 11 days per quarter. Led architecture reviews to define monolith-to-Kubernetes migration strategy and introduced Helm for reproducible deployments while mentoring 2 developers across 2 core units.",
  },
  {
    company: "Dell Technologies",
    role: "Software Developer",
    period: "May 2020 – Jul 2022",
    location: "India",
    description:
      "Designed Java-based Spring Boot microservices for core orchestration workflows, scaling backend services to support 1.8M daily active users. Structured persistent data layers with PostgreSQL, reliably managing 3.5M+ telemetry and configuration records across environments. Implemented event-driven API communication via Apache Kafka, decoupling backend components to maintain stability during high-demand feature launches. Automated end-to-end testing frameworks using Python, pytest, and Java unit tests, eliminating 8 hours of manual validation per release. Integrated containerized workflows using Docker and CI/CD pipelines, standardizing deployments across staging and production while driving code reviews within cross-functional Agile pods.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Experience</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-16">Where I've Worked</p>
        </motion.div>

        <div className="space-y-16">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-border hover:border-glow transition-colors duration-500"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-sm" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                  <p className="text-primary font-mono text-sm">{job.role}</p>
                </div>
                <div className="text-sm text-muted-foreground font-mono mt-1 sm:mt-0">
                  {job.period} · {job.location}
                </div>
              </div>

              <p className="text-sm text-secondary-foreground leading-relaxed">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
