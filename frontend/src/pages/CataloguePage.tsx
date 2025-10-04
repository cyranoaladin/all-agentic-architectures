/**
 * CataloguePage.tsx — Catalogue d’agents avec filtres, AgentCard et AgentModal
 */
import { useEffect, useMemo, useState } from 'react';
import { fetchPatterns } from '../api/patterns';
import AgentCard from '../components/AgentCard';
import type { AgentModalData } from '../components/AgentModal';
import AgentModal from '../components/AgentModal';
import type { PatternMeta } from '../types/patterns';

const CATS = ['All', 'Raisonnement', 'Action', 'Amélioration', 'Orchestration'] as const;

export default function CataloguePage() {
  const [cat, setCat] = useState<typeof CATS[number]>('All');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<string | null>(null);
  const [items, setItems] = useState<PatternMeta[]>([]);

  useEffect(() => { fetchPatterns().then((ps) => setItems(ps)); }, []);
  const filtered = useMemo(() => items.filter((a) => (cat === 'All' || a.categorie === cat) && (!q || `${a.nom_fr} ${a.fonctionnement_court}`.toLowerCase().includes(q.toLowerCase()))), [items, cat, q]);
  const raw = items.find(a => a.id_pattern === open) || null;
  const selected: AgentModalData | null = raw ? {
    id: raw.id_pattern,
    frName: raw.nom_fr,
    name: raw.id_pattern,
    slogan: raw.fonctionnement_court,
    description: raw.detail_technique,
    useCase: raw.utilite_concrets,
    icon: undefined as unknown as AgentModalData['icon'],
  } : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center gap-2 mb-4">
        {CATS.map(c => (
          <button key={c} onClick={() => setCat(c)} className={`px-3 py-1.5 rounded-full border ${cat === c ? 'border-accent-1' : 'border-white/20 opacity-80 hover:opacity-100'}`}>{c}</button>
        ))}
        <input className="ml-auto px-3 py-1.5 rounded-md bg-bg-card border border-white/10" placeholder="Recherche…" value={q} onChange={e => setQ(e.target.value)} />
        <small className="opacity-80">{filtered.length} / {items.length}</small>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(a => (
          <AgentCard key={a.id_pattern} id={a.id_pattern} frName={a.nom_fr} name={a.categorie} slogan={a.fonctionnement_court} onClick={() => setOpen(a.id_pattern)} />
        ))}
      </div>

      <AgentModal agent={selected} onClose={() => setOpen(null)} />
    </div>
  );
}
