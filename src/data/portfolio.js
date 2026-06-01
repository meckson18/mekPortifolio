export const personalInfo = {
  name: "Meckson Christopher",
  firstName: "Meckson",
  title: "Data Scientist",
  email: "cmeckson38@gmail.com",
  phone: ["+255778526487"],
  location: "Dar es Salaam",
  githubUrl: "https://github.com/meckson18",
  linkedinUrl: "",
  whatsappUrl: "https://wa.me/255679526487",
};

export const portfolioProfile = {
  ...personalInfo,
  intro:
    "Exploring data, analytics, and machine learning to turn information into useful insight.",
  hero: {
    badge: "Data science, analytics, and insight-driven problem solving",
    
    cta: {
      projectsLabel: "Explore Work",
      githubLabel: "GitHub",
    },
    panel: {
      eyebrow: "Personal Profile",
      heading: "Learning, analyzing, and building with data",
      availabilityLabel: "Available for learning and collaboration",
      availabilityText: "Data analysis, dashboards, machine learning, and research support",
    },
  },
  about: {
    eyebrow: "About Me",
    heading: "Turning raw data into clear, practical understanding.",
    profileCard: {
      eyebrow: "Personal Profile",
    },
    biography: [
      "I am a data scientist focused on using data analysis, visualization, and machine learning to understand real-world problems.",
      "My work is currently centered on building strong foundations in statistics, Python, SQL, dashboards, and practical machine learning workflows.",
    ],
    highlights: [
      "Data analysis and visualization",
      "Machine learning fundamentals",
      "Insight-focused reporting",
    ],
    stats: [
      {
        label: "Current Focus",
        value: "Data Science",
        detail: "Analytics, statistics, and machine learning",
      },
      {
        label: "Core Tools",
        value: "Python / SQL",
        detail: "Working with data from analysis to insight",
      },
      {
        label: "Learning Path",
        value: "ML + BI",
        detail: "Models, dashboards, and reporting",
      },
      {
        label: "Portfolio",
        value: "Growing",
        detail: "Projects will be added as they are completed",
      },
    ],
  },
  skills: {
    eyebrow: "Core Skills",
    heading: "Data science skills built around analysis, modeling, and communication.",
    description:
      "A focused skill set for working with data, finding patterns, and presenting insights clearly.",
    categories: [
      {
        title: "Data Analysis",
        items: ["Data Cleaning", "Exploratory Data Analysis", "Data Interpretation"],
      },
      {
        title: "Machine Learning",
        items: ["Supervised Learning", "Model Evaluation", "Predictive Analytics"],
      },
      {
        title: "Languages",
        items: ["Python", "SQL", "JavaScript Basics"],
      },
      {
        title: "Visualization",
        items: ["Dashboards", "Charts", "Insight Reports"],
      },
      {
        title: "Workflow Tools",
        items: ["Git", "GitHub", "Microsoft Office"],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    heading: "Projects will be added soon.",
    description:
      "Meckson is currently preparing portfolio projects. This section is ready for future data science, analytics, and machine learning work.",
    emptyLabel: "No projects added yet",
    emptyText: "New work can be added here when it is ready to share.",
    items: [],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's connect about data, learning, and useful ideas.",
    description:
      "If you would like to connect with Meckson about data science, analytics, or collaboration opportunities, use the contact details below.",
    panel: {
      eyebrow: "Get In Touch",
      socialLabel: "Social Media",
      emailLabel: "Email",
      phoneLabel: "Phone",
      availabilityLabel: "Availability",
      locationLabel: "Location",
    },
    email: personalInfo.email,
    phone: personalInfo.phone,
    availability: "Available for learning, collaboration, and entry-level data opportunities.",
    location: personalInfo.location,
    footer: {
      note: "Built with React, Vite, Tailwind CSS, and a focus on clear digital presentation.",
      copyright: "Meckson Christopher. All rights reserved.",
      backToTopLabel: "Back to top",
    },
  },
  focusAreas: ["Data Analysis", "Machine Learning", "Dashboards"],
  stats: [
    { label: "Focus", value: "Data Science" },
    { label: "Tools", value: "Python, SQL, BI" },
    { label: "Goal", value: "Analyze, Learn, Explain" },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: personalInfo.githubUrl,
    },
    {
      label: "WhatsApp",
      href: personalInfo.whatsappUrl,
    },
  ],
  cta: {
    projectsHref: "#projects",
  },
};
