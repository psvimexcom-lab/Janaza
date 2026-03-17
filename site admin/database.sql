/janazah-mondiale
├── /public-site       <-- Ce que les gens voient (Next.js/React)
│   ├── index.html     (Liste des Janazahs, Recherche par ville)
│   ├── register.js    (Inscription Google/Phone + Token Notification)
│   └── sw.js          (Service Worker pour recevoir les Push)
│
├── /admin-panel       <-- Votre outil interne (Protégé)
│   ├── dashboard.html (Liste des annonces envoyées)
│   ├── create.js      (Formulaire de saisie + Envoi notification)
│   └── stats.js       (Nombre d_abonnés par ville)
│
└── /supabase          <-- Le "cerveau" commun (Gratuit)
    ├── functions/     (Scripts Edge pour l_envoi des Push)
    └── schema.sql     (La structure des tables qu_on a vue)