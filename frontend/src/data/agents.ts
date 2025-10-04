/**
 * agents.ts — Données des 19 agents (résumé). Peut être enrichi via patterns_data côté backend.
 */
import { Brain, GitBranch, Network, CircleCheck, Gauge, Search, Shuffle, Bot, Lightbulb, Eye, TrendingUp, Share2, Link, Dices } from 'lucide-react';
import type { ComponentType } from 'react';

export type AgentItem = {
  id: string;
  name: string;
  frName: string;
  slogan: string;
  description: string;
  useCase: string[];
  icon: ComponentType<{ size?: number }>;
  category: 'Raisonnement' | 'Action' | 'Amélioration' | 'Orchestration';
  relatedAgents?: string[];
};

export const agentData: AgentItem[] = [
  { id: 'A01', name: 'Chain-of-Thought', frName: "L'agent Pense-Tout", slogan: 'Structurer sa pensée étape par étape.', description: 'Raisonnement linéaire explicite pour améliorer la clarté.', useCase: ['Plans de leçons', 'Explications claires'], icon: Brain, category: 'Raisonnement', relatedAgents: ['A02','A09'] },
  { id: 'A02', name: 'Tree-of-Thought', frName: "L'agent Stratège", slogan: 'Explorer plusieurs pistes de réflexion.', description: 'Exploration arborescente avec évaluation.', useCase: ['Dissertation', 'Idéation'], icon: GitBranch, category: 'Raisonnement', relatedAgents: ['A01','A03'] },
  { id: 'A03', name: 'Graph-of-Thought', frName: "L'agent Réseau", slogan: 'Connecter les idées pour plus de profondeur.', description: 'Réseau non linéaire de pensées interconnectées.', useCase: ['Corrélations', 'Systèmes complexes'], icon: Network, category: 'Raisonnement', relatedAgents: ['A02','A13'] },
  { id: 'A04', name: 'Self-Consistency', frName: "L'agent Vérificateur", slogan: 'Fiabilité par redondance.', description: 'Exécute plusieurs approches et choisit le consensus.', useCase: ['Validation de réponses'], icon: CircleCheck, category: 'Raisonnement', relatedAgents: ['A09','A15'] },
  { id: 'A05', name: 'Tool Use', frName: "L'agent Outilleur", slogan: "Interagir avec le monde externe.", description: 'Appel aux outils/APIs externes.', useCase: ['Recherche web', 'Base interne'], icon: Gauge, category: 'Action', relatedAgents: ['A06','A14'] },
  { id: 'A06', name: 'ReAct', frName: "L'agent Cherche-et-Agis", slogan: 'Raisonner et agir en boucle.', description: 'Boucle reason/act avec observation.', useCase: ['Recherche dynamique', 'Automatisation multi-étapes'], icon: Search, category: 'Action', relatedAgents: ['A05','A12'] },
  { id: 'A07', name: 'Simulation', frName: "L'agent Simulateur", slogan: 'Tester des scénarios avant d’agir.', description: 'Monde virtuel pour évaluer des plans.', useCase: ['Changement de règlement', 'Impact financier'], icon: Shuffle, category: 'Action', relatedAgents: ['A08','A13'] },
  { id: 'A08', name: 'World Models', frName: "L'agent Connaisseur", slogan: 'Représentation interne du monde.', description: 'Carte cognitive et anticipation.', useCase: ['Planification long-terme'], icon: Bot, category: 'Action', relatedAgents: ['A07','A12'] },
  { id: 'A09', name: 'Reflexion', frName: "L'agent Rétroaction", slogan: 'Apprendre de ses erreurs.', description: 'Critique son travail et corrige.', useCase: ['Qualité des réponses'], icon: Lightbulb, category: 'Amélioration', relatedAgents: ['A04','A12'] },
  { id: 'A10', name: 'Critic Pattern', frName: "L'agent Critique Constructif", slogan: 'Évaluer objectivement.', description: 'Agent secondaire de QA.', useCase: ['Conformité', 'Pertinence'], icon: Eye, category: 'Amélioration', relatedAgents: ['A04','A15'] },
  { id: 'A11', name: 'Curriculum Learning', frName: "L'agent Progressif", slogan: 'Apprentissage pas à pas.', description: 'Progression graduée des tâches.', useCase: ['Parcours élève', 'Formation continue'], icon: TrendingUp, category: 'Amélioration', relatedAgents: ['A12'] },
  { id: 'A12', name: 'PEV', frName: "L'agent Chef de Projet", slogan: 'Planifier, exécuter, vérifier.', description: 'Séparation des rôles P-E-V.', useCase: ['Automatisation complexe'], icon: Share2, category: 'Amélioration', relatedAgents: ['A06','A08'] },
  { id: 'A13', name: 'Meta-Control', frName: "L'agent Gouvernance", slogan: 'Superviser et coordonner.', description: 'Agent maître qui route et arbitre.', useCase: ['Orchestration globale'], icon: Dices, category: 'Orchestration', relatedAgents: ['A14','A17'] },
  { id: 'A14', name: 'Delegation', frName: "L'agent Délégué", slogan: 'Assigner au bon expert.', description: 'Délégation ciblée.', useCase: ['Quiz', 'Rapports spécialisés'], icon: Link, category: 'Orchestration', relatedAgents: ['A05','A13'] },
  { id: 'A15', name: 'Ensembling', frName: "L'agent Consensus", slogan: 'Combiner pour fiabilité.', description: 'Agrégation de sorties multi‑agents.', useCase: ['Synthèse messages'], icon: Share2, category: 'Orchestration', relatedAgents: ['A04','A10'] },
  { id: 'A16', name: 'Controlled Flow', frName: "L'agent Séquentiel", slogan: 'Ordre fixe.', description: 'Pipeline déterministe.', useCase: ['Procédures'], icon: TrendingUp, category: 'Orchestration', relatedAgents: ['A17'] },
  { id: 'A17', name: 'LLM as Router', frName: "L'agent Routeur", slogan: 'Choisir le bon expert.', description: 'Analyse intention et routage.', useCase: ['Dispatch automatique'], icon: Bot, category: 'Orchestration', relatedAgents: ['A13','A14'] },
  { id: 'A18', name: 'Self-Consistency', frName: "L'agent Consensus par itérations", slogan: 'N générations → vote.', description: 'Plusieurs générations et vote majoritaire.', useCase: ['Réduction des erreurs'], icon: CircleCheck, category: 'Raisonnement', relatedAgents: ['A04','A09'] },
  { id: 'A19', name: 'Curriculum', frName: "L'agent Progression", slogan: 'Exercices gradués 1→3.', description: 'Propose des exercices par niveau.', useCase: ['Progression pédagogique'], icon: TrendingUp, category: 'Amélioration', relatedAgents: ['A12'] },
];


