/**
 * AgentCard.tsx — Carte agent réutilisable (icône, nom FR/EN, hover)
 */
import type { ComponentType } from "react";

export type AgentCardItem = {
  id: string;
  frName: string;
  name: string;
  icon?: ComponentType<{ size?: number; }>;
  slogan?: string;
  onClick?: () => void;
};

export default function AgentCard({ id, frName, name, icon: Icon, slogan, onClick }: AgentCardItem) {
  return (
    <button onClick={onClick} className="text-left p-4 rounded-xl border border-white/10 bg-bg-card hover:border-accent-1 transition-all w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {Icon ? (
            <div className="p-2 rounded-full bg-accent-1/15 border border-accent-1/30"><Icon size={20} /></div>
          ) : null}
          <div>
            <div className="font-medium">{frName}</div>
            <div className="text-sm opacity-80">{name}</div>
          </div>
        </div>
        <code className="opacity-70">{id}</code>
      </div>
      {slogan && <div className="mt-2 text-sm opacity-80">{slogan}</div>}
    </button>
  );
}
