import "./overview.css";

export default function Overview() {
  return (
    <div className="ovr">
      <section className="hero">
        <div className="hero__content">
          <h1>Plateforme d’IA Agentique pour les Lycées</h1>
          <p>Dix-sept agents IA spécialisés qui coopèrent pour renforcer la pédagogie, la gouvernance et la réussite des élèves.</p>
        </div>
      </section>

      <section className="value">
        <h2>Pourquoi c’est important</h2>
        <div className="value__grid">
          <div className="card">
            <h3>Excellence Opérationnelle</h3>
            <p>Automatiser les tâches répétitives, réduire les délais et fournir une traçabilité claire pour les équipes et la direction.</p>
          </div>
          <div className="card">
            <h3>Impact Pédagogique</h3>
            <p>Générer des plans de cours, des évaluations formatives et des ressources enrichies alignées avec les objectifs du programme.</p>
          </div>
          <div className="card">
            <h3>Confiance & Qualité</h3>
            <p>Vérification, planification et agents d’ensemble garantissent des résultats fiables et explicables—prêts pour un usage réel.</p>
          </div>
        </div>
      </section>

      <section className="catalog">
        <h2>17 Agents — Organisés en Équipe</h2>
        <div className="catalog__grid">
          {[
            { t: "Raisonnement", d: "Planifier, explorer des pistes et valider des idées.", k: "A01–A04" },
            { t: "Action & Outils", d: "Rechercher, récupérer et agir de façon itérative.", k: "A02–A03" },
            { t: "Qualité & Robustesse", d: "Brouillon, critique, vérification et amélioration.", k: "A05, A13, A15" },
            { t: "Mémoire", d: "Connaissances épisodiques, sémantiques et graphe.", k: "A07–A08" },
            { t: "Coordination", d: "Ensemble, routage, méta-contrôle.", k: "A10–A12, A11" },
            { t: "Simulation", d: "Scénarios de dry-run et mondes simulés.", k: "A14, A16" },
            { t: "Méta-Réflexion", d: "Auto-évaluation et incertitude.", k: "A17" },
          ].map((c, i) => (
            <div className="card card--soft" key={i}>
              <div className="card__k">{c.k}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="demo">
        <h2>Démonstration Rapide</h2>
        <p className="demo__lead">Comment les agents collaborent pour répondre à une demande concrète d’enseignant.</p>
        <ol className="demo__steps">
          <li><strong>Demande de l’enseignant :</strong> « Crée un plan de cours sur les énergies renouvelables avec des ressources vérifiées pour Terminale. »</li>
          <li><strong>Le Routeur détecte</strong> les besoins (planification + recherche) et délègue.</li>
          <li><strong>L’agent ReAct</strong> effectue la recherche web et sélectionne des sources fiables.</li>
          <li><strong>L’agent de Planification</strong> structure le cours (objectifs, activités, évaluation).</li>
          <li><strong>Les agents Vérification/Critique</strong> relisent et améliorent la proposition.</li>
          <li><strong>Livraison finale</strong> : un plan prêt à l’emploi avec des liens vérifiés.</li>
        </ol>
      </section>

      <section className="roles">
        <h2>Conçu pour Chaque Rôle</h2>
        <div className="roles__grid">
          <div className="role">
            <h3>Enseignants</h3>
            <p>Du plan de cours aux évaluations formatives—gagnez du temps et clarifiez vos objectifs.</p>
          </div>
          <div className="role">
            <h3>Élèves</h3>
            <p>Accompagnement structuré, retours clairs et références fiables pour gagner en autonomie.</p>
          </div>
          <div className="role">
            <h3>Direction</h3>
            <p>Tableaux de bord, synthèses et scénarios pour une prise de décision transparente.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
