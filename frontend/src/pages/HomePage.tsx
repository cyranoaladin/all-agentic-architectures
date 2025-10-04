/**
 * HomePage.tsx — Page d’accueil (hero + CTA)
 */
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Plateforme d’IA Agentique</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">17+ agents collaboratifs pour la pédagogie, la gouvernance et l’autonomie. Explorez le catalogue et lancez des démos.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/catalogue" className="px-5 py-2 rounded-lg bg-accent-2 text-black">Ouvrir le catalogue</Link>
          <Link to="/demo" className="px-5 py-2 rounded-lg border border-white/20">Voir la démonstration</Link>
        </div>
      </section>
    </div>
  );
}


