import { Mail, Linkedin, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Let's Connect</h2>
        <p className="text-muted-foreground mb-8">Open to opportunities and collaborations</p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:avinashr.polam@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/avinash-reddy-polam-8107621b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm hover:bg-surface-hover transition-colors border border-border"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          Commerce, Texas
        </div>
        <p className="text-xs text-muted-foreground mt-4 font-mono">
          © {new Date().getFullYear()} Avinash Reddy Polam
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
