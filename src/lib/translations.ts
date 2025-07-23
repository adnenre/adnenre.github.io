export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
    },
    // Home Page
    home: {
      greeting: "Hi, I'm",
      name: "Adnen ",
      roles: [
        "Tech Lead / Js Consultant ",
        "Guides architectural decisions and tech stack choices",
        "Ensures code quality, scalability, and best practices",
        "Mentors and supports developers",
      ],
      description:
        "I lead the development of scalable, high-performance web applications using modern architectures. Passionate about mentoring teams, driving technical excellence, and delivering exceptional digital experiences that make an impact",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
    },
    // Projects Page
    projects: {
      title: "My Projects",
      subtitle:
        "A collection of projects that showcase my skills and passion for creating exceptional web experiences.",
      featured: "Featured",
      code: "Code",
      liveDemo: "Live Demo",
      projectsList: {
        ecommerce: {
          title: "E-Commerce Platform",
          description:
            "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
        },
        taskManager: {
          title: "Task Management App",
          description:
            "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        },
        weather: {
          title: "Weather Dashboard",
          description:
            "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
        },
        portfolio: {
          title: "Portfolio Website",
          description:
            "A responsive portfolio website showcasing modern design principles and smooth animations.",
        },
        socialDashboard: {
          title: "Social Media Dashboard",
          description:
            "Analytics dashboard for social media management with data visualization and scheduling features.",
        },
        lms: {
          title: "Learning Management System",
          description:
            "Educational platform with course management, progress tracking, and interactive learning modules.",
        },
      },
    },
    // Skills Page
    skills: {
      title: "Skills & Expertise",
      subtitle:
        "A comprehensive overview of my technical skills and professional competencies in modern web development.",
      categories: {
        frontend: {
          title: "Frontend Technologies",
          description: "Modern frontend frameworks and libraries",
        },
        styling: {
          title: "Styling & Design",
          description: "CSS frameworks and design tools",
        },
        backend: {
          title: "Backend & Database",
          description: "Server-side technologies and databases",
        },
        tools: {
          title: "Tools & DevOps",
          description: "Development tools and deployment platforms",
        },
      },
      certifications: "Certifications",
      certificationsDescription: "Professional certifications and achievements",
    },
    // About Page
    about: {
      title: "About Me",
      subtitle:
        "Passionate frontend developer with a love for creating beautiful, functional, and user-centered digital experiences.",
      stats: {
        experience: "Years of Experience",
        projects: "Projects Completed",
        clients: "Happy Clients",
        location: "Current Location",
      },
      story: {
        title: "My Story",
        content: [
          "I'm a passionate frontend developer with over 5 years of experience creating beautiful, responsive, and user-friendly web applications. My journey began with a curiosity about how websites work, which quickly evolved into a deep love for crafting digital experiences.",
          "I specialize in React, Next.js, and TypeScript, with a strong focus on performance optimization and accessibility. I believe that great software is not just about clean code, but about solving real problems for real people.",
          "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community through blog posts and mentoring.",
        ],
      },
      whatIDo: {
        title: "What I Do",
        items: {
          frontend: {
            title: "Frontend Development",
            description:
              "Building responsive and interactive user interfaces with modern frameworks.",
          },
          performance: {
            title: "Performance Optimization",
            description:
              "Optimizing applications for speed, accessibility, and user experience.",
          },
          mentoring: {
            title: "Code Review & Mentoring",
            description:
              "Helping teams improve code quality and sharing knowledge with developers.",
          },
          consulting: {
            title: "Technical Consulting",
            description:
              "Advising on technology choices and architecture decisions.",
          },
        },
      },
      experience: {
        title: "Experience",
        subtitle: "My professional journey and key achievements",
        jobs: {
          senior: {
            title: "Senior Frontend Developer",
            company: "TechCorp Inc.",
            period: "2022 - Present",
            location: "San Francisco, CA",
            description:
              "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns.",
            achievements: [
              "Improved application performance by 40%",
              "Led migration to Next.js 13 App Router",
              "Mentored 5 junior developers",
            ],
          },
          frontend: {
            title: "Frontend Developer",
            company: "StartupXYZ",
            period: "2020 - 2022",
            location: "Remote",
            description:
              "Developed responsive web applications using React and TypeScript, collaborated with design team to implement pixel-perfect UIs.",
            achievements: [
              "Built 3 major product features from scratch",
              "Reduced bundle size by 30%",
              "Implemented comprehensive testing suite",
            ],
          },
          junior: {
            title: "Junior Web Developer",
            company: "Digital Agency",
            period: "2019 - 2020",
            location: "New York, NY",
            description:
              "Created custom websites for clients, learned modern web development practices, and contributed to team projects.",
            achievements: [
              "Delivered 15+ client projects",
              "Learned React and modern JavaScript",
              "Improved team workflow efficiency",
            ],
          },
        },
      },
    },
    // Contact Page
    contact: {
      title: "Get In Touch",
      subtitle: `Have a project in mind or want to collaborate? `,
      subtitle_2: "I'd love to hear from you",
      subtitle_3: " Let's create something amazing together.",
      form: {
        title: "Send me a message",
        subtitle:
          "Fill out the form below and I'll get back to you as soon as possible.",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "What's this about?",
        message: "Message",
        messagePlaceholder: "Tell me about your project or idea...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent!",
        successDescription:
          "Thank you for your message. I'll get back to you soon.",
      },
      info: {
        title: "Contact Information",
        subtitle: "Feel free to reach out through any of these channels.",
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      social: {
        title: "Follow Me",
        subtitle: "Connect with me on social media and stay updated.",
      },
      availability: {
        title: "Availability",
        status: "Status",
        available: "Available",
        responseTime: "Response Time",
        responseValue: "Within 24 hours",
        timezone: "Timezone",
        timezoneValue: "PST (UTC-8)",
      },
    },
    // 404 Page
    notFound: {
      title: "Page Not Found",
      description:
        "Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.",
      goHome: "Go Home",
      goBack: "Go Back",
      contactText: "If you believe this is an error, please",
      contactLink: "contact me",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      retry: "Retry",
    },
  },
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      projects: "Projets",
      skills: "Compétences",
      about: "À propos",
      contact: "Contact",
    },
    // Home Page
    home: {
      greeting: "Salut, je suis",
      name: "Adnen ",
      roles: [
        "Tech lead / Consultant Js",
        "Guide les décisions architecturales et les choix de stack technique",
        "Garantit la qualité du code, l'évolutivité et les bonnes pratiques",
        "Mentore et soutient les développeurs",
      ],
      description:
        "Je pilote le développement d'applications web performantes et évolutives en utilisant des architectures modernes. Passionné(e) par le mentorat d'équipes, l'excellence technique et la création d'expériences digitales qui font la différence.",
      viewWork: "Voir Mon Travail",
      getInTouch: "Me Contacter",
    },
    // Projects Page
    projects: {
      title: "Mes Projets",
      subtitle:
        "Une collection de projets qui démontrent mes compétences et ma passion pour créer des expériences web exceptionnelles.",
      featured: "En vedette",
      code: "Code",
      liveDemo: "Démo Live",
      projectsList: {
        ecommerce: {
          title: "Plateforme E-Commerce",
          description:
            "Une plateforme e-commerce complète construite avec Next.js, incluant l'authentification utilisateur, le traitement des paiements et un tableau de bord administrateur.",
        },
        taskManager: {
          title: "App de Gestion de Tâches",
          description:
            "Une application collaborative de gestion de tâches avec des mises à jour en temps réel, des fonctionnalités de glisser-déposer et de collaboration d'équipe.",
        },
        weather: {
          title: "Tableau de Bord Météo",
          description:
            "Un magnifique tableau de bord météo avec des prévisions basées sur la localisation, des cartes interactives et des analyses météorologiques détaillées.",
        },
        portfolio: {
          title: "Site Portfolio",
          description:
            "Un site portfolio responsive présentant des principes de design modernes et des animations fluides.",
        },
        socialDashboard: {
          title: "Tableau de Bord Réseaux Sociaux",
          description:
            "Tableau de bord d'analyse pour la gestion des réseaux sociaux avec visualisation de données et fonctionnalités de planification.",
        },
        lms: {
          title: "Système de Gestion d'Apprentissage",
          description:
            "Plateforme éducative avec gestion de cours, suivi des progrès et modules d'apprentissage interactifs.",
        },
      },
    },
    // Skills Page
    skills: {
      title: "Compétences & Expertise",
      subtitle:
        "Un aperçu complet de mes compétences techniques et de mes compétences professionnelles en développement web moderne.",
      categories: {
        frontend: {
          title: "Technologies Frontend",
          description: "Frameworks et bibliothèques frontend modernes",
        },
        styling: {
          title: "Style & Design",
          description: "Frameworks CSS et outils de design",
        },
        backend: {
          title: "Backend & Base de Données",
          description: "Technologies côté serveur et bases de données",
        },
        tools: {
          title: "Outils & DevOps",
          description: "Outils de développement et plateformes de déploiement",
        },
      },
      certifications: "Certifications",
      certificationsDescription:
        "Certifications professionnelles et réalisations",
    },
    // About Page
    about: {
      title: "À Propos de Moi",
      subtitle:
        "Développeur frontend passionné avec un amour pour créer des expériences numériques belles, fonctionnelles et centrées sur l'utilisateur.",
      stats: {
        experience: "Années d'Expérience",
        projects: "Projets Complétés",
        clients: "Clients Satisfaits",
        location: "Localisation Actuelle",
      },
      story: {
        title: "Mon Histoire",
        content: [
          "Je suis un développeur frontend passionné avec plus de 5 ans d'expérience dans la création d'applications web belles, responsives et conviviales. Mon parcours a commencé par une curiosité sur le fonctionnement des sites web, qui a rapidement évolué vers un amour profond pour la création d'expériences numériques.",
          "Je me spécialise dans React, Next.js et TypeScript, avec un fort accent sur l'optimisation des performances et l'accessibilité. Je crois qu'un excellent logiciel ne concerne pas seulement un code propre, mais la résolution de vrais problèmes pour de vraies personnes.",
          "Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies, de contribuer à des projets open source, ou de partager des connaissances avec la communauté des développeurs à travers des articles de blog et du mentorat.",
        ],
      },
      whatIDo: {
        title: "Ce Que Je Fais",
        items: {
          frontend: {
            title: "Développement Frontend",
            description:
              "Construction d'interfaces utilisateur responsives et interactives avec des frameworks modernes.",
          },
          performance: {
            title: "Optimisation des Performances",
            description:
              "Optimisation des applications pour la vitesse, l'accessibilité et l'expérience utilisateur.",
          },
          mentoring: {
            title: "Révision de Code & Mentorat",
            description:
              "Aider les équipes à améliorer la qualité du code et partager des connaissances avec les développeurs.",
          },
          consulting: {
            title: "Conseil Technique",
            description:
              "Conseiller sur les choix technologiques et les décisions d'architecture.",
          },
        },
      },
      experience: {
        title: "Expérience",
        subtitle: "Mon parcours professionnel et mes principales réalisations",
        jobs: {
          senior: {
            title: "Développeur Frontend Senior",
            company: "TechCorp Inc.",
            period: "2022 - Présent",
            location: "San Francisco, CA",
            description:
              "Direction du développement frontend pour les applications d'entreprise, mentorat des développeurs juniors et implémentation de patterns React modernes.",
            achievements: [
              "Amélioration des performances de l'application de 40%",
              "Direction de la migration vers Next.js 13 App Router",
              "Mentorat de 5 développeurs juniors",
            ],
          },
          frontend: {
            title: "Développeur Frontend",
            company: "StartupXYZ",
            period: "2020 - 2022",
            location: "À distance",
            description:
              "Développement d'applications web responsives utilisant React et TypeScript, collaboration avec l'équipe de design pour implémenter des interfaces pixel-perfect.",
            achievements: [
              "Construction de 3 fonctionnalités produit majeures à partir de zéro",
              "Réduction de la taille du bundle de 30%",
              "Implémentation d'une suite de tests complète",
            ],
          },
          junior: {
            title: "Développeur Web Junior",
            company: "Agence Digitale",
            period: "2019 - 2020",
            location: "New York, NY",
            description:
              "Création de sites web personnalisés pour les clients, apprentissage des pratiques modernes de développement web et contribution aux projets d'équipe.",
            achievements: [
              "Livraison de plus de 15 projets clients",
              "Apprentissage de React et JavaScript moderne",
              "Amélioration de l'efficacité du workflow d'équipe",
            ],
          },
        },
      },
    },
    // Contact Page
    contact: {
      title: "Me Contacter",
      subtitle: "Vous avez un projet en tête ou souhaitez collaborer ?  ",
      subtitle_2: "J'aimerais avoir de vos nouvelles.",
      subtitle_3: "Créons quelque chose d'incroyable ensemble.",

      form: {
        title: "Envoyez-moi un message",
        subtitle:
          "Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.",
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre.email@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "De quoi s'agit-il ?",
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre projet ou idée...",
        send: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé !",
        successDescription:
          "Merci pour votre message. Je vous répondrai bientôt.",
      },
      info: {
        title: "Informations de Contact",
        subtitle: "N'hésitez pas à me contacter par l'un de ces canaux.",
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
      },
      social: {
        title: "Me Suivre",
        subtitle:
          "Connectez-vous avec moi sur les réseaux sociaux et restez informé.",
      },
      availability: {
        title: "Disponibilité",
        status: "Statut",
        available: "Disponible",
        responseTime: "Temps de Réponse",
        responseValue: "Dans les 24 heures",
        timezone: "Fuseau Horaire",
        timezoneValue: "PST (UTC-8)",
      },
    },
    // 404 Page
    notFound: {
      title: "Page Non Trouvée",
      description:
        "Oups ! La page que vous recherchez n'existe pas. Elle a peut-être été déplacée, supprimée, ou vous avez saisi une mauvaise URL.",
      goHome: "Aller à l'Accueil",
      goBack: "Retour",
      contactText: "Si vous pensez qu'il s'agit d'une erreur, veuillez",
      contactLink: "me contacter",
    },
    // Common
    common: {
      loading: "Chargement...",
      error: "Erreur",
      retry: "Réessayer",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en;
}
