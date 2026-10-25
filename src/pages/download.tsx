import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "../css/download.module.css";
import { siteConfig } from "@site/src/config/siteConfig";

const DETAILS = [
  { label: "Platform", value: "Android", icon: "smartphone" },
  { label: "Minimum OS", value: "Android 10+", icon: "layers" },
  { label: "Download Size", value: "102 MB", icon: "package" },
  { label: "Offline Access", value: "Available", icon: "wifi" },
];

const STEPS = [
  {
    number: "01",
    title: "Download the APK",
    description: "Get the latest stable StudyVault release.",
  },
  {
    number: "02",
    title: "Open the file",
    description: "Find the downloaded APK on your device.",
  },
  {
    number: "03",
    title: "Install the app",
    description: "Follow Android's installation prompts.",
  },
  {
    number: "04",
    title: "Start studying",
    description: "Open StudyVault and access your study materials.",
  },
];

const FEATURES = [
  {
    icon: "offline",
    title: "Offline first",
    description: "Access your saved study materials without internet.",
  },
  {
    icon: "book",
    title: "Organized learning",
    description: "Keep subjects, chapters and sections together.",
  },
  {
    icon: "share",
    title: "Quick import",
    description: "Import supported content using Android Share.",
  },
  {
    icon: "gallery",
    title: "Screenshot gallery",
    description: "Keep study screenshots organized in one place.",
  },
  {
    icon: "chart",
    title: "Study tracker",
    description: "Keep track of your study activity.",
  },
  {
    icon: "shield",
    title: "Privacy focused",
    description: "Designed with privacy in mind.",
  },
];

function FeatureIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "smartphone":
      return (
        <svg {...common}>
          <rect x="5" y="2" width="14" height="20" rx="2.5" />
          <path d="M11 18h2" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
        </svg>
      );
    case "package":
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="M3 8v9l9 5 9-5V8M12 13v9" />
        </svg>
      );
    case "wifi":
    case "offline":
      return (
        <svg {...common}>
          <path d="M3 9a14 14 0 0 1 18 0M6.5 12.5a9 9 0 0 1 11 0M10 16a3.5 3.5 0 0 1 4 0" />
          <path d="M12 20h.01M3 3l18 18" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M12 7v14M3 4h5a4 4 0 0 1 4 4v13a4 4 0 0 0-4-4H3zM21 4h-5a4 4 0 0 0-4 4" />
        </svg>
      );
    case "share":
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.7 10.6 6.6-4.2m-6.6 7 6.6 4.2" />
        </svg>
      );
    case "gallery":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="m7 14 4-4 4 3 5-7" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Download() {
  const downloadUrl = `${siteConfig.urls.releases}/download/v${siteConfig.app.version}/StudyVault-v${siteConfig.app.version}.apk`;
  const releaseNotesUrl = siteConfig.urls.latestRelease;

  return (
    <Layout
      title="Download StudyVault"
      description="Download StudyVault for Android. Organize your study materials and access them offline."
    >
      <main className={styles.main}>
        <div className="container">
          {/* Hero */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.statusDot} />
                YOUR STUDY SPACE, EVERYWHERE
              </div>

              <Heading as="h1" className={styles.title}>
                Your learning.
                <br />
                <span className={styles.titleAccent}>Your way.</span>
              </Heading>

              <p className={styles.subtitle}>
                Everything you need to organize your study materials,
                track your progress, and keep learning — even offline.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={styles.downloadButton}
                  href={downloadUrl}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                  Download for Android
                </Link>

                <Link
                  className={styles.secondaryButton}
                  href={releaseNotesUrl}
                >
                  What's new
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <div className={styles.heroMeta}>
                <span>
                  <FeatureIcon name="smartphone" />
                  Android 10+
                </span>
                <span className={styles.metaDivider} />
                <span>
                  <FeatureIcon name="shield" />
                  Stable release
                </span>
              </div>
            </div>

            {/* Decorative app preview */}
            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.glow} />

              <div className={styles.previewCard}>
                <div className={styles.previewTop}>
                  <div className={styles.appMark}>S</div>
                  <div>
                    <p className={styles.previewEyebrow}>STUDYVAULT</p>
                    <p className={styles.previewGreeting}>Your study space</p>
                  </div>
                  <span className={styles.previewMenu}>•••</span>
                </div>

                <div className={styles.previewBanner}>
                  <span className={styles.previewTag}>YOUR LIBRARY</span>
                  <p>Keep your knowledge organized.</p>
                  <div className={styles.previewLines}>
                    <span />
                    <span />
                  </div>
                </div>

                <p className={styles.previewSectionTitle}>Your subjects</p>

                <div className={styles.subjectRow}>
                  <div className={`${styles.subjectIcon} ${styles.purple}`}>
                    M
                  </div>
                  <div className={styles.subjectInfo}>
                    <strong>Mathematics</strong>
                    <span>Chapters & notes</span>
                  </div>
                  <span className={styles.subjectArrow}>↗</span>
                </div>

                <div className={styles.subjectRow}>
                  <div className={`${styles.subjectIcon} ${styles.blue}`}>
                    P
                  </div>
                  <div className={styles.subjectInfo}>
                    <strong>Physics</strong>
                    <span>Concepts & revision</span>
                  </div>
                  <span className={styles.subjectArrow}>↗</span>
                </div>

                <div className={styles.subjectRow}>
                  <div className={`${styles.subjectIcon} ${styles.green}`}>
                    C
                  </div>
                  <div className={styles.subjectInfo}>
                    <strong>Chemistry</strong>
                    <span>Topics & resources</span>
                  </div>
                  <span className={styles.subjectArrow}>↗</span>
                </div>

                <div className={styles.previewFooter}>
                  <span className={styles.previewFooterDot} />
                  Your knowledge, organized
                </div>
              </div>

              <div className={styles.floatingBadge}>
                <span className={styles.floatingIcon}>
                  <FeatureIcon name="offline" />
                </span>
                <span>
                  <strong>Learn offline</strong>
                  <small>Your materials, ready</small>
                </span>
              </div>
            </div>
          </section>

          {/* Release details */}
          <section className={styles.releaseSection}>
            <div className={styles.releaseHeading}>
              <div>
                <span className={styles.sectionEyebrow}>THE LATEST RELEASE</span>
                <Heading as="h2" className={styles.sectionTitle}>
                  Ready to get started?
                </Heading>
              </div>

              <span className={styles.stableBadge}>
                <span className={styles.statusDot} />
                Stable
              </span>
            </div>

            <div className={styles.releaseCard}>
              <div className={styles.releaseMain}>
                <div className={styles.appIcon}>
                  <span>S</span>
                </div>

                <div className={styles.releaseInfo}>
                  <Heading as="h3" className={styles.releaseTitle}>
                    StudyVault
                  </Heading>
                  <p className={styles.releaseVersion}>
                    Version v{siteConfig.app.version}
                  </p>
                  <p className={styles.releaseDate}>
                    Updated {siteConfig.app.updateDate}
                  </p>
                </div>

                <Link
                  className={styles.releaseDownload}
                  href={downloadUrl}
                >
                  Download APK
                  <span aria-hidden="true">↓</span>
                </Link>
              </div>

              <div className={styles.detailGrid}>
                {DETAILS.map((item) => (
                  <div key={item.label} className={styles.detailItem}>
                    <span className={styles.detailIcon}>
                      <FeatureIcon name={item.icon} />
                    </span>
                    <div>
                      <span className={styles.detailLabel}>{item.label}</span>
                      <strong className={styles.detailValue}>
                        {item.value}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className={styles.featuresSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>MADE FOR LEARNING</span>
              <Heading as="h2" className={styles.sectionTitle}>
                More focus. Less clutter.
              </Heading>
              <p className={styles.sectionDescription}>
                A simpler way to keep your study resources organized
                and ready whenever you need them.
              </p>
            </div>

            <div className={styles.featureGrid}>
              {FEATURES.map((feature) => (
                <article key={feature.title} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <FeatureIcon name={feature.icon} />
                  </div>
                  <Heading as="h3" className={styles.featureTitle}>
                    {feature.title}
                  </Heading>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Installation */}
          <section className={styles.installSection}>
            <div className={styles.installIntro}>
              <span className={styles.sectionEyebrow}>UP AND RUNNING</span>
              <Heading as="h2" className={styles.sectionTitle}>
                Start in four simple steps.
              </Heading>
              <p className={styles.sectionDescription}>
                Get StudyVault installed on your Android device
                and start organizing your learning.
              </p>
              <Link
                className={styles.installLink}
                href={downloadUrl}
              >
                Get StudyVault <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className={styles.steps}>
              {STEPS.map((step) => (
                <div key={step.number} className={styles.step}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div>
                    <Heading as="h3" className={styles.stepTitle}>
                      {step.title}
                    </Heading>
                    <p className={styles.stepDescription}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className={styles.bottomCta}>
            <div className={styles.ctaMark}>S</div>
            <div className={styles.ctaContent}>
              <Heading as="h2" className={styles.ctaTitle}>
                Make room for better learning.
              </Heading>
              <p className={styles.ctaDescription}>
                Your study materials deserve a home. Make it StudyVault.
              </p>
            </div>
            <Link className={styles.ctaButton} href={downloadUrl}>
              Download StudyVault <span aria-hidden="true">↗</span>
            </Link>
          </section>

          <p className={styles.lastUpdated}>
            Current release: v{siteConfig.app.version} · Last updated {siteConfig.app.updateDate}
          </p>
        </div>
      </main>
    </Layout>
  );
}
