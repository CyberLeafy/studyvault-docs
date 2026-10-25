const URL = "https://github.com/CyberLeafy/studyvault-docs"

export const siteConfig = {
  app: {
    name: "StudyVault",
    tagLine: "Organize your study materials with ease.",
    version: "1.1.0",
    releaseDate: "July 2026",
    updateDate: "August 2026",
    platform: "Android",
  },

  project: {
    name: "studyvault",
    organization: "CyberLeafy",
    repository: "https://github.com/CyberLeafy/studyvault-docs",
    // packageName: "com.yourorganization.studyvault",
  },

  urls: {
    // repo urls
    website: "https://studyvault-docs.netlify.app",
    repository: { URL },
    releases: `${URL}/releases`,
    latestRelease: `${URL}/releases/latest`,

    // routes
    download: "/download",
    documentation: "/docs/getting-started/installation",
    guide: "/docs/guide/subject",
    faq: "/docs/faq",
    privacyPolicy: "/docs/privacy-policy",
  },

  developer: {
    name: "CyberLeafy",
    github: "https://github.com/CyberLeafy",
    portfolio: "https://hellocoder.online"
  },
} as const;
