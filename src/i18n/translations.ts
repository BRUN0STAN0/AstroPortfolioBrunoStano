export const locales = ["it", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

export type TimelineItem = {
  title: string;
  year: string;
  description: string;
  left?: boolean;
};

export type Translations = {
  meta: {
    title: string;
  };
  common: {
    language: string;
    light: string;
    dark: string;
  };
  nav: {
    brand: string;
    hero: string;
    numbers: string;
    dotnet: string;
    journey: string;
    projects: string;
    skills: string;
    contacts: string;
    cta: string;
  };
  hero: {
    label: string;
    hello: string;
    name: string;
    rolesLabel: string;
    roles: string[];
    description: string;
    ctaJourney: string;
    ctaContact: string;
    photoAlt: string;
    cardRole: string;
    cardDescription: string;
    focusLabel: string;
    focusDescription: string;
    nowLabel: string;
    nowTitle: string;
    nowDescription: string;
    experienceLabel: string;
    yearsLabel: string;
  };
  statistics: {
    label: string;
    title: string;
    description: string;
    first: {
      title: string;
      description: string;
    };
    second: {
      title: string;
      description: string;
    };
    third: {
      title: string;
      description: string;
    };
  };
  dotnet: {
    label: string;
    title: string;
    description: string;
    backendTitle: string;
    backendItems: string[];
    frontendTitle: string;
    frontendItems: string[];
    devopsTitle: string;
    devopsItems: string[];
    boxText: string;
  };
  journey: {
    label: string;
    title: string;
    description: string;
    timeline: TimelineItem[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    stackLabel: string;
    items: Array<{
      title: string;
      description: string;
      stack: string;
    }>;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    softTitle: string;
    softItems: string[];
    languagesTitle: string;
    languageItems: string[];
    workModeTitle: string;
    workModeItems: string[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    availabilityLabel: string;
    availabilityText: string;
    whyTitle: string;
    whyItems: string[];
    callText: string;
  };
};

export const translations: Record<Locale, Translations> = {
  it: {
    meta: {
      title: "Portfolio · Bruno Stano",
    },
    common: {
      language: "Lingua",
      light: "Modalità Chiara",
      dark: "Modalità Scura",
    },
    nav: {
      brand: "Bruno Stano",
      hero: "Hero",
      numbers: "Numeri",
      dotnet: "Specializzato in .NET",
      journey: "Percorso",
      projects: "Progetti",
      skills: "Competenze",
      contacts: "Contatti",
      cta: "Contattami",
    },
    hero: {
      label: "Portfolio · Developer",
      hello: "Ciao, sono",
      name: "Bruno Stano",
      rolesLabel: "Ruoli",
      roles: ["Backend", "Fullstack", "Frontend"],
      description:
        "Costruisco esperienze web focalizzate su performance, accessibilità e cura dei dettagli. In questa pagina trovi il mio percorso, le tappe professionali più importanti e alcune metriche che raccontano il mio lavoro.",
      ctaJourney: "Esplora il mio percorso",
      ctaContact: "Contattami",
      photoAlt: "Foto di Bruno Stano",
      cardRole: "Full Stack .NET Developer · Software Engineer",
      cardDescription:
        "Aiuto aziende e team a costruire prodotti web affidabili, mantenibili e piacevoli da usare.",
      focusLabel: "Focus",
      focusDescription:
        "Full Stack .NET con attenzione a performance, sicurezza e clean architecture.",
      nowLabel: "Attualmente",
      nowTitle: "Full Stack .NET Developer",
      nowDescription: "Lavoro su applicazioni enterprise e strumenti interni.",
      experienceLabel: "Esperienza",
      yearsLabel: "anni",
    },
    statistics: {
      label: "Numeri",
      title: "Un profilo solido, misurabile",
      description:
        "Esperienza concreta su progetti reali, formazione continua e un focus verticale sul mondo .NET e sullo sviluppo full stack.",
      first: {
        title: "Anni di esperienza full stack",
        description: "Dal 2022 su progetti gestionali, e-commerce e soluzioni enterprise.",
      },
      second: {
        title: "Ore di formazione intensiva",
        description: "Tra bootcamp EPICODE e percorsi avanzati in Ingegneria Informatica.",
      },
      third: {
        title: "Tecnologie nel mio stack",
        description:
          "Da .NET, C#, Blazor, EF Core a frontend moderni, database SQL e tooling DevOps.",
      },
    },
    dotnet: {
      label: "Specializzato in .NET",
      title: "Backend solido, frontend moderno, ecosistema Microsoft",
      description:
        "Lavoro ogni giorno con lo stack .NET per costruire applicazioni scalabili, manutenibili e sicure. Applico principi di Clean Architecture, attenzione alle performance e una forte disciplina sul versioning e sulla qualità del codice.",
      backendTitle: "Backend · .NET & Microsoft",
      backendItems: [
        "C#, .NET, ASP.NET MVC & API REST",
        "Entity Framework Core (Code First / DB First)",
        "JWT, autorizzazione, ruoli e claims",
        "Architetture a livelli e Clean Code",
      ],
      frontendTitle: "Frontend & UX",
      frontendItems: [
        "Blazor, Angular, TypeScript, JavaScript",
        "UI reattive con attenzione a UX e accessibilità",
        "Integrazione con API REST e real-time",
        "Prototipazione con Figma e strumenti visuali",
      ],
      devopsTitle: "DevOps, tooling & lavoro in team",
      devopsItems: [
        "Azure DevOps, GitHub, GitLab, CI/CD",
        "Code review, branching strategy e gestione release",
        "Monitoraggio, logging e attenzione alla osservabilità",
        "Collaborazione con stakeholder non tecnici e team distribuiti",
      ],
      boxText:
        "Cerchi qualcuno che prenda in mano un progetto .NET esistente o che ti aiuti a disegnarne uno nuovo da zero? Possiamo parlarne:",
    },
    journey: {
      label: "Percorso",
      title: "Dal mare al codice",
      description:
        "Una carriera che unisce disciplina e responsabilità maturate nel mondo nautico con l'esperienza tecnica su progetti full stack .NET e una formazione continua in ambito informatico.",
      timeline: [
        {
          title: "VALVES ENGINEERING · Full Stack .NET Developer",
          year: "2025 - oggi",
          description:
            "Sviluppo di applicazioni enterprise con architettura a livelli (Core, B2B, UI), Entity Framework su PostgreSQL e integrazione di front-end Blazor WASM.",
          left: true,
        },
        {
          title: "EXTRETON SARL · CEO & Full Stack Developer",
          year: "2024 - 2025",
          description:
            "Guida tecnica e di prodotto per piattaforme e-commerce e applicazioni web personalizzate, dall'analisi dei requisiti al rilascio in produzione.",
        },
        {
          title: "FM TECHNOLOGY · Full Stack .NET Developer",
          year: "2022 - 2024",
          description:
            "Sviluppo e modernizzazione di un gestionale per appuntamenti con stack .NET, aggiornato alle ultime versioni e potenziato con nuove funzionalità su misura.",
          left: true,
        },
        {
          title: "EPICODE · Laurea in Ingegneria Informatica",
          year: "2024 - in corso",
          description:
            "Percorso accademico focalizzato su sviluppo software, AI, Blockchain e tecnologie Web3, con forte attenzione alle competenze trasversali e di project management.",
        },
        {
          title: "EPICODE · Bootcamp Full Stack Developer",
          year: "2022 - 2023",
          description:
            "Bootcamp intensivo di sviluppo full stack con oltre 1000 ore di coding, progetti reali e lavoro in team su stack moderno JavaScript/.NET.",
          left: true,
        },
        {
          title:
            "Istituto Tecnico Nautico · Diploma Allievo Ufficiale di Coperta",
          year: "2008 - 2013",
          description:
            "Formazione tecnica strutturata, disciplina e responsabilità maturate nel contesto nautico, oggi applicate alla gestione di progetti software complessi.",
        },
      ],
    },
    projects: {
      label: "Progetti",
      title: "Alcuni progetti che raccontano il mio lavoro",
      description:
        "Dalle applicazioni gestionali alle piattaforme e-commerce, porto avanti progetti con attenzione alla scalabilità, alla UI e ai processi di sviluppo.",
      stackLabel: "Stack",
      items: [
        {
          title: "Gestionale appuntamenti in ambiente sanitario",
          description:
            "Applicazione .NET per la gestione di appuntamenti e risorse, aggiornata alle ultime versioni del framework e integrata con SQL Server e Azure DevOps.",
          stack: ".NET · C# · ASP.NET · Entity Framework · SQL Server · Azure DevOps",
        },
        {
          title: "Piattaforme web personalizzate per EXTRETON",
          description:
            "Soluzioni e-commerce e gestionali costruite su misura, dal design alla messa in produzione, con forte attenzione all'esperienza utente.",
          stack: ".NET · JavaScript/TypeScript · CSS · API REST · Git · CI/CD",
        },
        {
          title: "Strumenti interni e dashboard per VALVES ENGINEERING",
          description:
            "Sviluppo di UI e API per gestire processi interni, con architettura a livelli e integrazione tra Blazor Client e API .NET.",
          stack: "Blazor · .NET · EF Core · PostgreSQL · Clean Architecture",
        },
      ],
    },
    skills: {
      label: "Competenze",
      title: "Non solo codice",
      description:
        "Oltre alla parte tecnica, porto in ogni progetto comunicazione chiara, responsabilità e capacità di lavoro in team.",
      softTitle: "Soft skills",
      softItems: [
        "Comunicazione efficace con stakeholder tecnici e business",
        "Gestione del tempo e delle priorità",
        "Attitudine alla mentorship e alla condivisione",
        "Orientamento al risultato e alla qualità",
      ],
      languagesTitle: "Lingue",
      languageItems: [
        "Italiano — madrelingua",
        "Inglese — livello B2",
        "Francese — livello B2",
      ],
      workModeTitle: "Modalità di lavoro",
      workModeItems: [
        "Lavoro ibrido/remoto con team distribuiti",
        "Metodologie agili e iterazioni brevi",
        "Documentazione essenziale ma curata",
        "Collaborazione continua con product e design",
      ],
    },
    contact: {
      label: "Contatti",
      title: "Parliamo del tuo prossimo progetto",
      description:
        "Che si tratti di modernizzare un gestionale esistente, lanciare un nuovo prodotto o strutturare meglio il tuo stack .NET, possiamo valutare insieme la soluzione giusta.",
      intro:
        "Preferisco una comunicazione diretta e concreta: scrivimi con qualche riga sul contesto, gli obiettivi e le tempistiche desiderate.",
      emailLabel: "Email",
      phoneLabel: "Telefono",
      availabilityLabel: "Disponibilità",
      availabilityText:
        "Valuto opportunità full-time, collaborazioni e progetti freelance continuativi.",
      whyTitle: "Perché lavorare insieme",
      whyItems: [
        "Esperienza reale su stack .NET e ambienti enterprise.",
        "Approccio strutturato ma pratico, orientato al valore.",
        "Comunicazione chiara con team tecnici e business.",
      ],
      callText:
        "Se preferisci, possiamo organizzare una prima call conoscitiva di 20-30 minuti.",
    },
  },
  en: {
    meta: {
      title: "Portfolio · Bruno Stano",
    },
    common: {
      language: "Language",
      light: "Light",
      dark: "Dark",
    },
    nav: {
      brand: "Bruno Stano",
      hero: "Hero",
      numbers: "Numbers",
      dotnet: "Specialized in .NET",
      journey: "Journey",
      projects: "Projects",
      skills: "Skills",
      contacts: "Contact",
      cta: "Contact me",
    },
    hero: {
      label: "Portfolio · Developer",
      hello: "Hi, I'm",
      name: "Bruno Stano",
      rolesLabel: "Roles",
      roles: ["Backend", "Fullstack", "Frontend"],
      description:
        "I build web experiences focused on performance, accessibility, and attention to detail. On this page you'll find my journey, key professional milestones, and metrics that describe my work.",
      ctaJourney: "Explore my journey",
      ctaContact: "Contact me",
      photoAlt: "Photo of Bruno Stano",
      cardRole: "Full Stack .NET Developer · Software Engineer",
      cardDescription:
        "I help companies and teams build reliable, maintainable, and pleasant-to-use web products.",
      focusLabel: "Focus",
      focusDescription:
        "Full Stack .NET with strong attention to performance, security, and clean architecture.",
      nowLabel: "Now",
      nowTitle: "Full Stack .NET Developer",
      nowDescription: "I work on enterprise applications and internal tools.",
      experienceLabel: "Experience",
      yearsLabel: "years",
    },
    statistics: {
      label: "Numbers",
      title: "A solid, measurable profile",
      description:
        "Hands-on experience on real projects, continuous learning, and a strong vertical focus on .NET and full-stack development.",
      first: {
        title: "Years of full-stack experience",
        description: "Since 2022 on business apps, e-commerce, and enterprise solutions.",
      },
      second: {
        title: "Hours of intensive training",
        description: "Across EPICODE bootcamp and advanced Computer Engineering studies.",
      },
      third: {
        title: "Technologies in my stack",
        description:
          "From .NET, C#, Blazor, and EF Core to modern frontend, SQL databases, and DevOps tooling.",
      },
    },
    dotnet: {
      label: "Specialized in .NET",
      title: "Solid backend, modern frontend, Microsoft ecosystem",
      description:
        "I work daily with the .NET stack to build scalable, maintainable, and secure applications. I apply Clean Architecture principles, focus on performance, and keep strong discipline on versioning and code quality.",
      backendTitle: "Backend · .NET & Microsoft",
      backendItems: [
        "C#, .NET, ASP.NET MVC & REST APIs",
        "Entity Framework Core (Code First / DB First)",
        "JWT, authorization, roles, and claims",
        "Layered architectures and Clean Code",
      ],
      frontendTitle: "Frontend & UX",
      frontendItems: [
        "Blazor, Angular, TypeScript, JavaScript",
        "Reactive UI with attention to UX and accessibility",
        "REST API and real-time integrations",
        "Prototyping with Figma and visual tools",
      ],
      devopsTitle: "DevOps, tooling & teamwork",
      devopsItems: [
        "Azure DevOps, GitHub, GitLab, CI/CD",
        "Code reviews, branching strategy, and release management",
        "Monitoring, logging, and observability mindset",
        "Collaboration with non-technical stakeholders and distributed teams",
      ],
      boxText:
        "Looking for someone to take ownership of an existing .NET project or help design a new one from scratch? Let's talk:",
    },
    journey: {
      label: "Journey",
      title: "From sea to code",
      description:
        "A career that blends discipline and responsibility gained in the nautical world with hands-on technical experience on full-stack .NET projects and continuous learning in computer science.",
      timeline: [
        {
          title: "VALVES ENGINEERING · Full Stack .NET Developer",
          year: "2025 - today",
          description:
            "Development of enterprise applications with layered architecture (Core, B2B, UI), Entity Framework on PostgreSQL, and Blazor WASM frontend integration.",
          left: true,
        },
        {
          title: "EXTRETON SARL · CEO & Full Stack Developer",
          year: "2024 - 2025",
          description:
            "Technical and product leadership for e-commerce platforms and custom web applications, from requirements analysis to production release.",
        },
        {
          title: "FM TECHNOLOGY · Full Stack .NET Developer",
          year: "2022 - 2024",
          description:
            "Development and modernization of an appointment management system using .NET stack, updated to latest framework versions and enhanced with tailored features.",
          left: true,
        },
        {
          title: "EPICODE · Computer Engineering Degree",
          year: "2024 - ongoing",
          description:
            "Academic path focused on software development, AI, blockchain, and Web3 technologies, with strong emphasis on soft skills and project management.",
        },
        {
          title: "EPICODE · Full Stack Developer Bootcamp",
          year: "2022 - 2023",
          description:
            "Intensive full-stack development bootcamp with over 1000 hours of coding, real projects, and team collaboration on modern JavaScript/.NET stack.",
          left: true,
        },
        {
          title: "Nautical Technical Institute · Deck Officer Diploma",
          year: "2008 - 2013",
          description:
            "Structured technical training, discipline, and responsibility developed in the nautical context, now applied to managing complex software projects.",
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Projects that represent my work",
      description:
        "From business applications to e-commerce platforms, I deliver projects with attention to scalability, UI quality, and development processes.",
      stackLabel: "Stack",
      items: [
        {
          title: "Healthcare appointment management platform",
          description:
            "A .NET application for appointment and resource management, updated to the latest framework versions and integrated with SQL Server and Azure DevOps.",
          stack: ".NET · C# · ASP.NET · Entity Framework · SQL Server · Azure DevOps",
        },
        {
          title: "Custom web platforms for EXTRETON",
          description:
            "Tailor-made e-commerce and business solutions, from design to production rollout, with strong focus on user experience.",
          stack: ".NET · JavaScript/TypeScript · CSS · REST API · Git · CI/CD",
        },
        {
          title: "Internal tools and dashboards for VALVES ENGINEERING",
          description:
            "UI and API development to support internal processes, with layered architecture and integration between Blazor Client and .NET APIs.",
          stack: "Blazor · .NET · EF Core · PostgreSQL · Clean Architecture",
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "More than code",
      description:
        "Beyond technical expertise, I bring clear communication, accountability, and team collaboration to every project.",
      softTitle: "Soft skills",
      softItems: [
        "Effective communication with technical and business stakeholders",
        "Time and priority management",
        "Mentorship and knowledge-sharing mindset",
        "Result and quality orientation",
      ],
      languagesTitle: "Languages",
      languageItems: [
        "Italian — native",
        "English — B2 level",
        "French — B2 level",
      ],
      workModeTitle: "Work style",
      workModeItems: [
        "Hybrid/remote work with distributed teams",
        "Agile methodologies and short iterations",
        "Lean but accurate documentation",
        "Continuous collaboration with product and design",
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's talk about your next project",
      description:
        "Whether you need to modernize an existing business app, launch a new product, or improve your .NET stack, we can define the right solution together.",
      intro:
        "I prefer direct and practical communication: write to me with a few lines about context, goals, and preferred timelines.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      availabilityLabel: "Availability",
      availabilityText:
        "I consider full-time roles, ongoing collaborations, and long-term freelance projects.",
      whyTitle: "Why work together",
      whyItems: [
        "Real-world experience on .NET stack and enterprise environments.",
        "Structured yet practical approach focused on value.",
        "Clear communication with technical and business teams.",
      ],
      callText: "If you prefer, we can schedule an initial 20-30 minute intro call.",
    },
  },
  fr: {
    meta: {
      title: "Portfolio · Bruno Stano",
    },
    common: {
      language: "Langue",
      light: "Clair",
      dark: "Sombre",
    },
    nav: {
      brand: "Bruno Stano",
      hero: "Accueil",
      numbers: "Chiffres",
      dotnet: "Spécialisé en .NET",
      journey: "Parcours",
      projects: "Projets",
      skills: "Compétences",
      contacts: "Contact",
      cta: "Me contacter",
    },
    hero: {
      label: "Portfolio · Développeur",
      hello: "Bonjour, je suis",
      name: "Bruno Stano",
      rolesLabel: "Rôles",
      roles: ["Backend", "Fullstack", "Frontend"],
      description:
        "Je conçois des expériences web centrées sur la performance, l'accessibilité et l'attention aux détails. Sur cette page, vous trouverez mon parcours, mes étapes professionnelles clés et des métriques qui décrivent mon travail.",
      ctaJourney: "Découvrir mon parcours",
      ctaContact: "Me contacter",
      photoAlt: "Photo de Bruno Stano",
      cardRole: "Développeur Full Stack .NET · Software Engineer",
      cardDescription:
        "J'aide les entreprises et les équipes à créer des produits web fiables, maintenables et agréables à utiliser.",
      focusLabel: "Focus",
      focusDescription:
        "Full Stack .NET avec une forte attention aux performances, à la sécurité et à la clean architecture.",
      nowLabel: "Actuellement",
      nowTitle: "Développeur Full Stack .NET",
      nowDescription: "Je travaille sur des applications enterprise et des outils internes.",
      experienceLabel: "Expérience",
      yearsLabel: "ans",
    },
    statistics: {
      label: "Chiffres",
      title: "Un profil solide et mesurable",
      description:
        "Expérience concrète sur des projets réels, formation continue et focus vertical sur l'univers .NET et le développement full stack.",
      first: {
        title: "Années d'expérience full stack",
        description: "Depuis 2022 sur des projets métiers, e-commerce et des solutions enterprise.",
      },
      second: {
        title: "Heures de formation intensive",
        description: "Entre le bootcamp EPICODE et des parcours avancés en ingénierie informatique.",
      },
      third: {
        title: "Technologies de mon stack",
        description:
          "De .NET, C#, Blazor et EF Core jusqu'au frontend moderne, bases SQL et outillage DevOps.",
      },
    },
    dotnet: {
      label: "Spécialisé en .NET",
      title: "Backend robuste, frontend moderne, écosystème Microsoft",
      description:
        "Je travaille chaque jour avec le stack .NET pour créer des applications scalables, maintenables et sécurisées. J'applique les principes de Clean Architecture, l'attention aux performances et une discipline forte sur le versioning et la qualité du code.",
      backendTitle: "Backend · .NET & Microsoft",
      backendItems: [
        "C#, .NET, ASP.NET MVC & API REST",
        "Entity Framework Core (Code First / DB First)",
        "JWT, autorisation, rôles et claims",
        "Architectures en couches et Clean Code",
      ],
      frontendTitle: "Frontend & UX",
      frontendItems: [
        "Blazor, Angular, TypeScript, JavaScript",
        "UI réactives avec attention à l'UX et à l'accessibilité",
        "Intégration avec API REST et real-time",
        "Prototypage avec Figma et outils visuels",
      ],
      devopsTitle: "DevOps, outillage & travail en équipe",
      devopsItems: [
        "Azure DevOps, GitHub, GitLab, CI/CD",
        "Code review, stratégie de branches et gestion des releases",
        "Monitoring, logging et attention à l'observabilité",
        "Collaboration avec des stakeholders non techniques et des équipes distribuées",
      ],
      boxText:
        "Vous cherchez quelqu'un pour reprendre un projet .NET existant ou vous aider à en concevoir un nouveau de zéro ? Parlons-en :",
    },
    journey: {
      label: "Parcours",
      title: "De la mer au code",
      description:
        "Une carrière qui combine discipline et sens des responsabilités acquis dans le monde nautique avec une expérience technique sur des projets full stack .NET et une formation continue en informatique.",
      timeline: [
        {
          title: "VALVES ENGINEERING · Développeur Full Stack .NET",
          year: "2025 - aujourd'hui",
          description:
            "Développement d'applications enterprise avec architecture en couches (Core, B2B, UI), Entity Framework sur PostgreSQL et intégration frontend Blazor WASM.",
          left: true,
        },
        {
          title: "EXTRETON SARL · CEO & Full Stack Developer",
          year: "2024 - 2025",
          description:
            "Pilotage technique et produit de plateformes e-commerce et d'applications web sur mesure, de l'analyse des besoins à la mise en production.",
        },
        {
          title: "FM TECHNOLOGY · Développeur Full Stack .NET",
          year: "2022 - 2024",
          description:
            "Développement et modernisation d'un logiciel de gestion des rendez-vous avec stack .NET, mis à jour vers les dernières versions et enrichi de fonctionnalités sur mesure.",
          left: true,
        },
        {
          title: "EPICODE · Diplôme en ingénierie informatique",
          year: "2024 - en cours",
          description:
            "Parcours académique axé sur le développement logiciel, l'IA, la blockchain et les technologies Web3, avec forte attention aux compétences transversales et au project management.",
        },
        {
          title: "EPICODE · Bootcamp Développeur Full Stack",
          year: "2022 - 2023",
          description:
            "Bootcamp intensif full stack avec plus de 1000 heures de code, projets réels et travail en équipe sur un stack moderne JavaScript/.NET.",
          left: true,
        },
        {
          title: "Institut Technique Nautique · Diplôme d'élève officier de pont",
          year: "2008 - 2013",
          description:
            "Formation technique structurée, discipline et responsabilités développées dans le contexte nautique, aujourd'hui appliquées à la gestion de projets logiciels complexes.",
        },
      ],
    },
    projects: {
      label: "Projets",
      title: "Des projets qui racontent mon travail",
      description:
        "Des applications métiers aux plateformes e-commerce, je mène des projets avec une forte attention à la scalabilité, à l'UI et aux processus de développement.",
      stackLabel: "Stack",
      items: [
        {
          title: "Gestion de rendez-vous dans le secteur de la santé",
          description:
            "Application .NET pour la gestion des rendez-vous et des ressources, mise à jour aux dernières versions du framework et intégrée avec SQL Server et Azure DevOps.",
          stack: ".NET · C# · ASP.NET · Entity Framework · SQL Server · Azure DevOps",
        },
        {
          title: "Plateformes web sur mesure pour EXTRETON",
          description:
            "Solutions e-commerce et métiers développées sur mesure, du design à la mise en production, avec une grande attention à l'expérience utilisateur.",
          stack: ".NET · JavaScript/TypeScript · CSS · API REST · Git · CI/CD",
        },
        {
          title: "Outils internes et dashboards pour VALVES ENGINEERING",
          description:
            "Développement d'UI et d'API pour gérer les processus internes, avec architecture en couches et intégration entre Blazor Client et API .NET.",
          stack: "Blazor · .NET · EF Core · PostgreSQL · Clean Architecture",
        },
      ],
    },
    skills: {
      label: "Compétences",
      title: "Pas seulement du code",
      description:
        "Au-delà de la technique, j'apporte à chaque projet une communication claire, de la responsabilité et un vrai esprit d'équipe.",
      softTitle: "Soft skills",
      softItems: [
        "Communication efficace avec des stakeholders techniques et business",
        "Gestion du temps et des priorités",
        "Esprit de mentorat et de partage",
        "Orientation résultat et qualité",
      ],
      languagesTitle: "Langues",
      languageItems: [
        "Italien — langue maternelle",
        "Anglais — niveau B2",
        "Français — niveau B2",
      ],
      workModeTitle: "Mode de travail",
      workModeItems: [
        "Travail hybride/remote avec des équipes distribuées",
        "Méthodologies agiles et itérations courtes",
        "Documentation essentielle mais soignée",
        "Collaboration continue avec product et design",
      ],
    },
    contact: {
      label: "Contact",
      title: "Parlons de votre prochain projet",
      description:
        "Qu'il s'agisse de moderniser un logiciel existant, lancer un nouveau produit ou mieux structurer votre stack .NET, nous pouvons définir ensemble la bonne solution.",
      intro:
        "Je privilégie une communication directe et concrète : écrivez-moi quelques lignes sur le contexte, les objectifs et les délais souhaités.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      availabilityLabel: "Disponibilité",
      availabilityText:
        "J'évalue des opportunités full-time, des collaborations et des projets freelance continus.",
      whyTitle: "Pourquoi travailler ensemble",
      whyItems: [
        "Expérience réelle sur stack .NET et environnements enterprise.",
        "Approche structurée mais pragmatique, orientée valeur.",
        "Communication claire avec équipes techniques et business.",
      ],
      callText:
        "Si vous préférez, nous pouvons organiser un premier appel de 20 à 30 minutes.",
    },
  },
};

export function getLocale(value?: string): Locale {
  if (value === "en" || value === "it" || value === "fr") {
    return value;
  }

  return "it";
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
