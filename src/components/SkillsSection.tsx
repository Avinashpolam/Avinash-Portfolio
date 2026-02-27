import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: ["Java (8–17)", "JavaScript", "Python", "SQL"] },
  { title: "Backend", skills: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate/JPA", "REST APIs", "Microservices"] },
  { title: "Frontend", skills: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB"] },
  { title: "Cloud & DevOps", skills: ["AWS (EC2, S3, RDS, EKS)", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
  { title: "Tools & Testing", skills: ["Maven", "Gradle", "Git", "JUnit", "Mockito", "Postman", "Swagger"] },
  { title: "Messaging", skills: ["Apache Kafka"] },
  { title: "Security", skills: ["JWT", "OAuth2", "OWASP"] },
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
