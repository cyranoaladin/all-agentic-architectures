/**
 * AgentModal.tsx — Modale d’explication d’un agent
 */
import type { ComponentType } from "react";

export type AgentModalData = {
  id: string;
  frName: string;
  name: string;
  slogan?: string;
  description?: string;
  useCase?: string[];
  icon?: ComponentType<{ size?: number; }>;
};

export default function AgentModal({ agent, onClose }: { agent: AgentModalData | null; onClose: () => void; }) {
  if (!agent) return null;
  const Icon = agent.icon;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4">
      <div className="bg-bg-card rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-white/10">
        <button onClick={onClose} className="absolute top-3 right-3 opacity-80 hover:opacity-100">✕</button>
        <div className="flex items-center gap-3 mb-4">
          {Icon ? (
            <div className="p-3 rounded-full bg-accent-1/15 border border-accent-1/30"><Icon size={28} /></div>
          ) : null}
          <div>
            <h2 className="text-xl font-semibold">{agent.frName}</h2>
            {agent.slogan && <p className="opacity-80">{agent.slogan}</p>}
          </div>
        </div>
        {agent.description && <p className="opacity-90 mb-4">{agent.description}</p>}
        {agent.useCase?.length ? (
          <div>
            <h3 className="font-medium mb-2">Cas d’utilisation</h3>
            <ul className="list-disc pl-5 opacity-90">
              {agent.useCase.map((u, i) => <li key={i}>{u}</li>)}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
