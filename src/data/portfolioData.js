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
      id: "sistema-gestion-empleados",
      title: "Sistema de Gestión de Empleados",
      category: "Desktop / Enterprise",
      featured: true,
      description: "Aplicación de escritorio para la administración eficiente de personal, control de asistencia, gestión de roles y reportes automatizados.",
      longDescription: "Sistema robusto desarrollado con Java y MySQL orientado a optimizar la gestión de recursos humanos. Implementa arquitectura limpia, manejo de transacciones en base de datos y una interfaz amigable construida con Java Swing.",
      technologies: ["Java", "MySQL", "Java Swing", "POO", "JDBC"],
      githubUrl: "https://github.com/sebastiantixe-hub",
      liveUrl: null,
      stats: [
        { label: "Lenguaje", value: "Java" },
        { label: "Base de Datos", value: "MySQL" },
        { label: "Interfaz", value: "Java Swing" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "sistema-mensajeria-whatsapp",
      title: "Sistema de Mensajería con Integración a WhatsApp",
      category: "Full Stack / Messaging",
      featured: true,
      description: "Plataforma automatizada para el envío masivo y programado de notificaciones a través de la API de WhatsApp, con panel interactivo.",
      longDescription: "Solución integral para automatización de comunicaciones corporativas. Incluye un dashboard dinámico en React para gestionar plantillas y programar envíos, con backend en Node.js integrando APIs REST en tiempo real.",
      technologies: ["React", "Node.js", "APIs REST", "Express", "Tailwind CSS", "Render"],
      githubUrl: "https://github.com/sebastiantixe-hub",
      liveUrl: "https://vercel.com",
      stats: [
        { label: "Frontend", value: "React" },
        { label: "Backend", value: "Node.js" },
        { label: "Integración", value: "WhatsApp API" }
      ],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "proximo-proyecto-1",
      title: "API REST Empresarial con Spring Boot (En desarrollo)",
      category: "Backend Microservices",
      featured: false,
      isPlaceholder: true,
      description: "Próximo proyecto preparado para arquitectura de microservicios con Spring Boot, Spring Security y Docker.",
      technologies: ["Java", "Spring Boot", "Docker", "PostgreSQL", "Swagger"],
      githubUrl: "https://github.com/sebastiantixe-hub",
      liveUrl: null,
      stats: [
        { label: "Framework", value: "Spring Boot" },
        { label: "Estado", value: "En desarrollo" }
      ],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1000&auto=format&fit=crop"
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
