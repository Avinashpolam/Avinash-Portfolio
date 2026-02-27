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
      "Designed backend services using Java, Spring Boot, and REST APIs to support 5 core banking workflows with Python-based data processing integration. Built event-driven pipelines with Apache Kafka handling 2.4M transaction events per business day, feeding ML scoring pipelines. Optimized PostgreSQL queries to reduce nightly reconciliation batch runtime from 6 hours to 2 hours. Automated CI/CD with Jenkins & Docker, removing 11 hours of manual release effort per cycle. Authored tests with JUnit & Mockito, blocking 160+ regression defects prior to UAT, and managed 14 microservices on AWS (EC2, RDS, CloudWatch) under internal resiliency standards.",
  },
  {
    company: "Airbnb",
    role: "Software Engineer",
    period: "May 2020 – Jul 2022",
    location: "India",
    description:
      "Built backend components using Java & Spring Boot to support listing and booking workflows for 1.8M daily active users. Delivered 12 UI enhancements with React.js for search and listing detail pages, and managed 900K+ property and reservation records with PostgreSQL and JPA/Hibernate. Integrated asynchronous communication with Apache Kafka for real-time booking confirmations. Identified 70+ logic and data consistency issues through comprehensive test coverage and delivered 6 sprint milestones on schedule across distributed engineering teams.",
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
