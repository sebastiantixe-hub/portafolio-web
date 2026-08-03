export const portfolioData = {
  personal: {
    name: "Sebastian Esteban Tixe Quispe",
    shortName: "Sebastian Tixe",
    title: "Software Engineer",
    subtitles: [
      "Software Engineer",
      "Backend Developer",
      "Data Analyst"
    ],
    status: "Disponible para nuevos proyectos y oportunidades",
    university: "Universidad Tecnológica del Perú (UTP)",
    degree: "Egresado de Ingeniería de Software",
    location: "Lima, Perú",
    email: "sebastiantixe@gmail.com", // Updated email
    github: "https://github.com/sebastiantixe-hub", // Updated GitHub URL
    linkedin: "https://www.linkedin.com/in/sebastian-tixe-492879345", // Updated LinkedIn URL
    cvUrl: "#", // Link to CV PDF
  },
  
  about: {
    title: "Sobre mí",
    profileSummary: `Soy un egresado de Ingeniería de Software de la Universidad Tecnológica del Perú (UTP) con experiencia en desarrollo de aplicaciones web y sistemas de mensajería automatizada. Tengo experiencia consumiendo APIs REST, desarrollando aplicaciones frontend y backend, y desplegando proyectos en la nube. Me interesa especializarme en desarrollo de software, especialmente con Java, y continuar aprendiendo nuevas tecnologías.`,
    highlights: [
      {
        icon: "GraduationCap",
        title: "Ingeniería de Software",
        subtitle: "Universidad Tecnológica del Perú (UTP)"
      },
      {
        icon: "Server",
        title: "Especialización Backend",
        subtitle: "Enfoque principal en Java & Node.js"
      },
      {
        icon: "Cloud",
        title: "Cloud & Despliegues",
        subtitle: "Experiencia en Render, Vercel & AWS"
      },
      {
        icon: "Bot",
        title: "Automatización & APIs",
        subtitle: "Integraciones WhatsApp & REST APIs"
      }
    ]
  },

  experience: [
    {
      company: "Superinka EIRL",
      role: "Practicante de Desarrollo de Software",
      period: "Febrero 2026 – Mayo 2026",
      location: "Perú",
      type: "Prácticas Pre-Profesionales",
      description: "Desarrollo integral de soluciones de software, sistemas de automatización de mensajería y despliegues en la nube.",
      responsibilities: [
        "Desarrollo de sistemas de mensajería automatizada.",
        "Integración con APIs REST.",
        "Desarrollo Frontend con React y tecnologías web modernas.",
        "Desarrollo Backend para el procesamiento eficiente de datos.",
        "Despliegue de aplicaciones en entornos cloud como Render y Vercel.",
        "Optimización de procesos internos y código base."
      ],
      technologies: ["React", "Node.js", "APIs REST", "Render", "Vercel", "JavaScript", "Git"]
    }
  ],

  projects: [
    {
      id: "sportnexus-platform",
      title: "SportNexus Platform",
      category: "Full Stack / Web Platform",
      featured: true,
      description: "Plataforma web interactiva para la gestión y organización de eventos deportivos, integrando arquitectura moderna y consumo de APIs REST.",
      longDescription: "Aplicación robusta desarrollada en TypeScript con React y Node.js. Permite la administración en tiempo real de torneos, equipos y estadísticas deportivas con interfaz responsiva de alto rendimiento.",
      technologies: ["TypeScript", "React", "Node.js", "APIs REST", "Tailwind CSS"],
      githubUrl: "https://github.com/sebastiantixe-hub/sportnexus-platform",
      liveUrl: null,
      stats: [
        { label: "Lenguaje", value: "TypeScript" },
        { label: "Frontend", value: "React" },
        { label: "Estado", value: "Público" }
      ],
      image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "humanizador-tesis",
      title: "Humanizador de Tesis con IA",
      category: "Python / AI Tool",
      featured: true,
      description: "Herramienta especializada para procesar, estructurar y humanizar textos e investigaciones académicas generados por inteligencia artificial.",
      longDescription: "Solución backend en Python para análisis de texto y procesamiento de lenguaje natural. Aplica algoritmos de paráfrasis y reestructuración para mejorar la fluidez y coherencia académica de documentos.",
      technologies: ["Python", "APIs REST", "NLP", "Algoritmos", "AI Integration"],
      githubUrl: "https://github.com/sebastiantixe-hub/humanizador-tesis",
      liveUrl: null,
      stats: [
        { label: "Lenguaje", value: "Python" },
        { label: "Dominio", value: "IA / Procesamiento" },
        { label: "Estado", value: "Público" }
      ],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "sistema-whassap-saas",
      title: "Sistema de Mensajería & SaaS WhatsApp",
      category: "Full Stack / SaaS Messaging",
      featured: true,
      description: "Plataforma automatizada para el envío masivo y programado de notificaciones mediante la integración a la API de WhatsApp.",
      longDescription: "Sistema SaaS de automatización de mensajería empresarial desarrollado con TypeScript y Node.js. Incluye gestión de campañas, plantillas de mensajes y conectores con servicios backend desplegados en Render.",
      technologies: ["TypeScript", "React", "Node.js", "APIs REST", "Express", "Render"],
      githubUrl: "https://github.com/sebastiantixe-hub/sistema-whassap",
      liveUrl: "https://vercel.com",
      stats: [
        { label: "Lenguaje", value: "TypeScript" },
        { label: "Backend", value: "Node.js" },
        { label: "Integración", value: "WhatsApp API" }
      ],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "ja-partners-website",
      title: "JA Partners Website",
      category: "Frontend / Web App",
      featured: false,
      description: "Sitio web corporativo e interactivo enfocado en la presentación de servicios empresariales con diseño responsivo.",
      longDescription: "Desarrollado con JavaScript moderno, React y Tailwind CSS, priorizando tiempos de carga óptimos, diseño minimalista y experiencia de usuario fluida.",
      technologies: ["JavaScript", "React", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/sebastiantixe-hub/ja-partners-website",
      liveUrl: null,
      stats: [
        { label: "Lenguaje", value: "JavaScript" },
        { label: "Despliegue", value: "Vercel" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "sistema-gestion-empleados",
      title: "Sistema de Gestión de Empleados",
      category: "Desktop / Enterprise",
      featured: false,
      description: "Aplicación de escritorio para la administración eficiente de personal, control de asistencia, gestión de roles y reportes.",
      longDescription: "Sistema robusto desarrollado con Java y MySQL orientado a la gestión de recursos humanos. Implementa arquitectura limpia en POO y conexión JDBC a base de datos relacional.",
      technologies: ["Java", "MySQL", "Java Swing", "POO", "JDBC"],
      githubUrl: "https://github.com/sebastiantixe-hub",
      liveUrl: null,
      stats: [
        { label: "Lenguaje", value: "Java" },
        { label: "Base de Datos", value: "MySQL" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    }
  ],

  skills: [
    {
      category: "Lenguajes",
      icon: "Code",
      items: [
        { name: "Java", level: "Avanzado", highlight: true },
        { name: "JavaScript", level: "Intermedio", highlight: true }
      ]
    },
    {
      category: "Frameworks",
      icon: "Layers",
      items: [
        { name: "React", level: "Intermedio", highlight: true },
        { name: "Angular", level: "Básico", highlight: false }
      ]
    },
    {
      category: "Backend",
      icon: "Server",
      items: [
        { name: "Node.js", level: "Intermedio", highlight: true },
        { name: "APIs REST", level: "Avanzado", highlight: true }
      ]
    },
    {
      category: "Base de Datos",
      icon: "Database",
      items: [
        { name: "MySQL", level: "Intermedio", highlight: true }
      ]
    },
    {
      category: "Herramientas & Cloud",
      icon: "Wrench",
      items: [
        { name: "Git & GitHub", level: "Avanzado", highlight: true },
        { name: "Vercel", level: "Intermedio", highlight: true },
        { name: "Render", level: "Intermedio", highlight: true }
      ]
    },
    {
      category: "Otros Conceptos",
      icon: "Cpu",
      items: [
        { name: "Programación Orientada a Objetos", level: "Avanzado", highlight: true },
        { name: "Algoritmos y Estructura de Datos", level: "Intermedio", highlight: true }
      ]
    }
  ],

  certifications: [
    {
      title: "AWS re/Start",
      issuer: "Amazon Web Services",
      date: "2025",
      icon: "Cloud",
      color: "from-amber-500/20 to-orange-500/20",
      badgeColor: "border-amber-500/30 text-amber-300",
      description: "Formación intensiva en fundamentos de cloud computing, servicios AWS, seguridad y redes."
    },
    {
      title: "Desarrollador de Aplicaciones Móviles",
      issuer: "Capacitación Profesional",
      date: "2025",
      icon: "Smartphone",
      color: "from-blue-500/20 to-indigo-500/20",
      badgeColor: "border-blue-500/30 text-blue-300",
      description: "Desarrollo de interfaces responsivas y consumo de servicios backend para dispositivos móviles."
    },
    {
      title: "Excel Intermedio",
      issuer: "Certificación Técnica",
      date: "2024",
      icon: "FileSpreadsheet",
      color: "from-emerald-500/20 to-teal-500/20",
      badgeColor: "border-emerald-500/30 text-emerald-300",
      description: "Dominio de tablas dinámicas, funciones avanzadas, automatización y análisis de datos."
    },
    {
      title: "Inglés A2",
      issuer: "Centro de Idiomas",
      date: "2024",
      icon: "Languages",
      color: "from-purple-500/20 to-pink-500/20",
      badgeColor: "border-purple-500/30 text-purple-300",
      description: "Competencia de nivel elemental técnico para lectura de documentación y comunicación básica."
    }
  ]
};
