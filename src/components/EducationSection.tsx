import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Oracle Certified Associate, Java SE 8 Programmer",
  "AWS Certified Cloud Practitioner",
  "Forage – Walmart USA Advanced Software Engineering Simulation",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Education & Certifications</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-16">Credentials</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-primary text-xs tracking-wider uppercase">Education</h3>
            </div>
            <h4 className="text-lg font-semibold text-foreground">Texas A&M University – Commerce</h4>
            <p className="text-sm text-muted-foreground mt-1">Master of Science in Computer & Information Science</p>
            <p className="text-xs font-mono text-muted-foreground mt-2">Aug 2022 – May 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-primary text-xs tracking-wider uppercase">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="text-primary mt-0.5">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
