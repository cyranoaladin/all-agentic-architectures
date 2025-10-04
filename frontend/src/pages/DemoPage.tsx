/**
 * DemoPage.tsx — Démonstration interactive (étapes et agents surlignés)
 */
import { useState } from 'react';
import { agentData } from '../data/agents';

const steps = [
  { title: "1. Demande", text: "Un enseignant veut un plan de cours et des ressources.", agents: [] as string[] },
  { title: "2. Routage (A17)", text: "Le routeur analyse la requête.", agents: ['A17'] },
  { title: "3. Délégation (A14)", text: "Délègue vers A01 (plan) et A06 (recherche).", agents: ['A14', 'A01', 'A06'] },
  { title: "4. Exécution", text: "A01 planifie, A06 cherche.", agents: ['A01', 'A06'] },
  { title: "5. Validation (A10)", text: "Contrôle qualité.", agents: ['A10'] },
  { title: "6. Livraison", text: "Plan détaillé + liens utiles.", agents: [] as string[] },
];

export default function DemoPage() {
  const [i, setI] = useState(0);
  const st = steps[i];
  const isHi = (id: string) => st.agents.includes(id);
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setI(Math.max(0, i - 1))} className="px-3 py-1.5 rounded-md border border-white/20" disabled={i === 0}>Précédent</button>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{st.title}</h2>
          <p className="opacity-80">{st.text}</p>
        </div>
        <button onClick={() => setI(Math.min(steps.length - 1, i + 1))} className="px-3 py-1.5 rounded-md border border-white/20" disabled={i === steps.length - 1}>Suivant</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {agentData.map(a => (
          <div key={a.id} className={`p-3 rounded-lg border ${isHi(a.id) ? 'border-accent-2 bg-accent-2/10' : 'border-white/10'}`}>
            <div className="flex items-center gap-2"><a.icon size={18} /><span className="text-sm">{a.id} — {a.frName}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
