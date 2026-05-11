import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: ["Java 17", "Python", "JavaScript", "SQL", "PL/SQL", "Shell"] },
  { title: "Backend", skills: ["Spring Boot", "Spring Security", "Spring MVC", "Hibernate/JPA", "REST APIs", "Microservices"] },
  { title: "Frontend", skills: ["React.js", "Thymeleaf", "HTML5", "CSS3", "Responsive Design"] },
  { title: "Databases", skills: ["PostgreSQL", "Oracle DB", "MySQL", "SQL Server", "JDBC"] },
  { title: "Cloud & DevOps", skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Helm", "Terraform", "GitLab", "Jenkins", "Bitbucket"] },
  { title: "AI / ML", skills: ["OpenAI APIs", "LangChain", "LLM Integration", "scikit-learn", "TensorFlow", "spaCy", "Apache OpenNLP"] },
  { title: "Monitoring", skills: ["Prometheus", "Grafana", "Service Dashboards", "Log Monitoring"] },
  { title: "APIs & Security", skills: ["REST", "JWT", "OAuth 2.0", "Swagger/OpenAPI", "Postman", "RBAC"] },
  { title: "Testing", skills: ["JUnit", "Mockito", "pytest", "Integration Testing", "Regression Testing"] },
  { title: "Messaging & Integration", skills: ["Apache Kafka", "Keycloak", "Azure Intune", "Webhooks"] },
  { title: "Build & Methodology", skills: ["Maven", "Gradle", "Agile/Scrum", "SDLC", "Code Reviews"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Skills</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-16">Technical Arsenal</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-xl bg-card border border-border hover:border-glow hover:glow-sm transition-all duration-300"
            >
              <h3 className="font-mono text-primary text-xs tracking-wider uppercase mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
