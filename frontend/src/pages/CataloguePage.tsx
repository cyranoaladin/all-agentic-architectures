/**
 * CataloguePage.tsx — Catalogue d’agents avec filtres, AgentCard et AgentModal
 */
import { useMemo, useState } from 'react';
import { agentData } from '../data/agents';
import type { AgentModalData } from '../components/AgentModal';
import AgentCard from '../components/AgentCard';
import AgentModal from '../components/AgentModal';

const CATS = ['All','Raisonnement','Action','Amélioration','Orchestration'] as const;

export default function CataloguePage() {
  const [cat, setCat] = useState<typeof CATS[number]>('All');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<string | null>(null);

  const items = useMemo(() => agentData.filter(a => (cat==='All'||a.category===cat) && (!q || `${a.frName} ${a.name} ${a.slogan}`.toLowerCase().includes(q.toLowerCase()))), [cat,q]);
  const raw = agentData.find(a => a.id === open) || null;
  const selected: AgentModalData | null = raw ? {
    id: raw.id,
    frName: raw.frName,
    name: raw.name,
    slogan: raw.slogan,
    description: raw.description,
    useCase: raw.useCase,
    icon: raw.icon,
  } : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center gap-2 mb-4">
        {CATS.map(c => (
          <button key={c} onClick={() => setCat(c)} className={`px-3 py-1.5 rounded-full border ${cat===c?'border-accent-1':'border-white/20 opacity-80 hover:opacity-100'}`}>{c}</button>
        ))}
        <input className="ml-auto px-3 py-1.5 rounded-md bg-bg-card border border-white/10" placeholder="Recherche…" value={q} onChange={e=>setQ(e.target.value)} />
        <small className="opacity-80">{items.length} / {agentData.length}</small>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(a => (
          <AgentCard key={a.id} id={a.id} frName={a.frName} name={a.name} icon={a.icon} slogan={a.slogan} onClick={()=>setOpen(a.id)} />
        ))}
      </div>

      <AgentModal agent={selected} onClose={()=>setOpen(null)} />
    </div>
  );
}


