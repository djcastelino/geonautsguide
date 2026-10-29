import { ArrowUpRight, Compass } from "lucide-react";

export function JournalHeader({ current, onNavigate }) {
  return (
    <header className="journal-header">
      <button
        className="journal-brand"
        onClick={() => onNavigate("home")}
        aria-label="Geonauts Guide home"
      >
        <Compass size={31} strokeWidth={1.2} />
        <span>
          GEONAUTS<span>GUIDE</span>
        </span>
      </button>
      <nav aria-label="Main navigation">
        {[
          ["home", "Home"],
          ["grid", "Discover"],
          ["planner", "Travel planner"],
          ["cityguess", "Daily City Guess"],
        ].map(([id, title]) => (
          <button
            key={id}
            aria-current={current === id ? "page" : undefined}
            onClick={() => onNavigate(id)}
          >
            {title}
          </button>
        ))}
      </nav>
      <span className="journal-header-note">
        STAY CURIOUS. GO FURTHER. <ArrowUpRight size={14} />
      </span>
    </header>
  );
}

export function JournalFooter() {
  return (
    <footer className="journal-footer">
      <span>
        <Compass size={20} strokeWidth={1.2} /> GEONAUTS GUIDE
      </span>
      <p>A little more wonder, wherever you go. <a href="/privacy-policy.html" style={{textDecoration: "underline"}}>Privacy policy</a></p>
      <small>© {new Date().getFullYear()} GEONAUTS GUIDE</small>
    </footer>
  );
}
