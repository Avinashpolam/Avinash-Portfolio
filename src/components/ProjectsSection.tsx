import { motion } from "framer-motion";
import { Brain, BarChart3, Image, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Enhanced Security System with Breach Detection using Deep Learning",
    description: "Real-time deep learning security system using TensorFlow, CNNs, and OpenCV to accurately detect restricted-area breaches via multi-modal biometric analysis.",
    tech: ["TensorFlow", "Keras", "OpenCV", "CNN", "Deep Learning"],
    github: "https://github.com/Avinashpolam/Enhanced-Security-System-with-Breach-Detection-using-Deep-Learning",
    live: "https://security-breach-detectione.lovable.app/",
  },
  {
    icon: BarChart3,
    title: "Student Analysis and Ranking Automation System",
    description: "Automated academic evaluations and compliance reporting via a secure Python and SQL-based ranking platform with strict audit trails.",
    tech: ["Python", "SQL", "Automation", "Analytics"],
    github: "https://github.com/Avinashpolam/student-analysis-and-ranking-automation-system",
    live: "https://swiftrank-flow.lovable.app",
  },
  {
    icon: Image,
    title: "Data Augmentation Script – Triton Robotics",
    description: "Scalable Python and Keras utility that applies randomized image transformations to enrich and diversify datasets for robotics computer vision models.",
    tech: ["Python", "Keras", "OpenCV", "Computer Vision"],
    github: "https://github.com/Avinashpolam/data-augmentation-script",
    live: "https://data-augmentation-script.lovable.app",
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
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                        aria-label="View live site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
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
