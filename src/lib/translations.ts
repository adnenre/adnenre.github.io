export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",

      contact: "Contact",
    },
    // Home Page
    home: {
      question: "Hi are you looking ...  ?",
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

      getInTouch: "Get In Touch",
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

      contact: "Contact",
    },
    // Home Page
    home: {
      question: "Salut, tu cherches ... ?",
      greeting: "Salut, je suis",
      name: "Adnen ",
      roles: [
        "Tech lead / Consultant Js",
        "Guide les décisions architecturales et les choix de stack technique",
        "Garantit la qualité du code, l'évolutivité et les bonnes pratiques",
        "Mentore et soutient les développeurs",
      ],
      description:
        "Je pilote le développement d'applications web performantes et évolutives en utilisant des architectures modernes. Passionné par le mentorat d'équipes, l'excellence technique et la création d'expériences digitales qui font la différence.",
      viewWork: "Voir Mon Travail",
      getInTouch: "Me Contacter",
    },

    // About Page

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
