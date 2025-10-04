/**
 * Header.tsx — En-tête fixe avec navigation (Accueil, Catalogue, Démonstration)
 */
import { Home, LayoutGrid, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const loc = useLocation();
  const is = (p: string) => loc.pathname === p;
  const cls = (active: boolean) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all border-b-2 ${active ? "border-accent-1 text-[var(--accent-1,#00E5FF)]" : "border-transparent opacity-80 hover:opacity-100"}`;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-card/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-accent-2/20 border border-accent-2/40" />
          <div className="font-semibold tracking-wide">All Agentic</div>
          <div className="text-sm opacity-70">— Agentic IA demos</div>
        </div>
        <nav className="flex items-center gap-2" aria-label="Navigation principale">
          <Link to="/" className={cls(is("/"))} aria-label="Accueil"><Home size={18} /> Accueil</Link>
          <Link to="/catalogue" className={cls(is("/catalogue"))} aria-label="Catalogue"><LayoutGrid size={18} /> Catalogue</Link>
          <Link to="/demo" className={cls(is("/demo"))} aria-label="Démonstration"><Sparkles size={18} /> Démonstration</Link>
          <span className="ml-2 text-xs px-2 py-1 rounded-full border border-accent-1/40">UI Refresh</span>
        </nav>
      </div>
    </header>
  );
}
