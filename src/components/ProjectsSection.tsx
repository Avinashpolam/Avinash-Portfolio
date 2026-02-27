import { motion } from "framer-motion";
import { Brain, BarChart3, Image } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Security Breach Detection with Deep Learning",
    description: "Intelligent surveillance solution using CNNs and image processing to identify intrusions via facial patterns, height profiles, thermal signals, and iris recognition.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Deep Learning", "CNN"],
  },
  {
    icon: BarChart3,
    title: "Student Analysis & Ranking Automation",
    description: "Automated evaluation platform generating student rankings with audit trails for academic performance and compliance reporting.",
    tech: ["Python", "SQL", "Rule-based Logic", "Analytics"],
  },
  {
    icon: Image,
    title: "Data Augmentation Script – Triton Robotics",
    description: "Scalable image augmentation utility generating thousands of pre-labeled training images for robotics-focused ML models.",
    tech: ["Python", "OpenCV", "Keras", "Computer Vision"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Projects</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-16">What I've Built</p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-glow hover:glow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary text-primary">
                  <project.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
