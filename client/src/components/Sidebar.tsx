import { ChevronRight } from 'lucide-react';

/**
 * Sidebar Component - Premium Academic Design
 * 
 * Displays navigation links for article sections with elegant styling.
 * Features:
 * - Smooth scroll to section on click
 * - Active section indicator with left border accent
 * - Refined typography and spacing
 * - Responsive design (hidden on mobile, shown on desktop)
 */

interface SidebarProps {
  sections: Array<{ id: string; title: string }>;
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Sidebar({ sections, activeSection, onNavClick }: SidebarProps) {
  return (
    <aside className="p-8 h-full overflow-y-auto bg-card border-r border-border">
      {/* Logo/Title - Premium Typography */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Crimson Text', serif" }}>
          Research Article
        </h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Sycophancy in Language Models
        </p>
      </div>

      {/* Divider */}
      <div className="mb-8 h-px bg-border" />

      {/* Navigation Links */}
      <nav className="space-y-1 mb-10">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavClick(section.id)}
            className={`nav-link w-full text-left px-4 py-3 rounded-sm transition-all duration-200 flex items-center justify-between group ${
              activeSection === section.id
                ? 'active bg-sidebar-accent text-primary font-semibold border-l-3 border-primary pl-3'
                : 'text-foreground hover:bg-sidebar-accent/50'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-sm">{section.title}</span>
            {activeSection === section.id && (
              <ChevronRight size={16} className="text-primary" />
            )}
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="h-px bg-border mb-8" />

      {/* Author Information - Elegant Typography */}
      <div className="text-xs space-y-5">
        <div>
          <p className="font-semibold text-foreground mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>
            Authors
          </p>
          <p className="text-muted-foreground leading-relaxed">Linah Khayri</p>
          <p className="text-muted-foreground leading-relaxed">Falag Abdulmajeed</p>
        </div>
      </div>
    </aside>
  );
}
