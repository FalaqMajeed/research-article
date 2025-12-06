import { Github, Mail, Linkedin } from 'lucide-react';

/**
 * Footer Component - Premium Academic Design
 * 
 * Displays contact information and social links.
 * Features:
 * - Elegant contact & links section
 * - Professional footer styling
 * - Clean and minimal design
 */

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Contact & Links Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
            Contact & Links
          </h3>
          <div className="space-y-6">
            {/* GitHub */}
            <div className="flex items-start gap-4">
              <Github size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  GitHub Repository
                </p>
                <a
                  href="https://github.com/VenoStellar/sycophancy-in-lms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  github.com/VenoStellar/sycophancy-in-lms
                </a>
              </div>
            </div>

            {/* LinkedIn - Linah Khayri */}
            <div className="flex items-start gap-4">
              <Linkedin size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  LinkedIn - Linah Khayri
                </p>
                <a
                  href="https://www.linkedin.com/in/linah-khayri-474476339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  linkedin.com/in/linah-khayri-474476339
                </a>
              </div>
            </div>

            {/* LinkedIn - Falag Abdulmajeed */}
            <div className="flex items-start gap-4">
              <Linkedin size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  LinkedIn - Falag Abdulmajeed
                </p>
                <a
                  href="http://www.linkedin.com/in/falag-abdulmajeed-90598926b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  linkedin.com/in/falag-abdulmajeed-90598926b
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12" />

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
