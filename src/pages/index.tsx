import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import styles from "../css/index.module.css";
import { siteConfig } from "@site/src/config/siteConfig";

const features = [
  {
    icon: "↗",
    title: "Share to Import",
    description:
      "Send screenshots straight from any Android app using the Share menu. Save them without the extra steps.",
  },
  {
    icon: "▦",
    title: "Smart Organization",
    description:
      "Build a clear structure with Subjects, Chapters, and Sections so every screenshot has its place.",
  },
  {
    icon: "▣",
    title: "Screenshot Gallery",
    description:
      "Browse your study material in one place. Open, zoom, swipe, and revisit screenshots whenever you need.",
  },
  {
    icon: "◷",
    title: "Study Tracker",
    description:
      "Keep track of your preparation with a simple timeline that helps you see your study progress.",
  },
  {
    icon: "⌁",
    title: "Works Offline",
    description:
      "Your study library is available without an internet connection, whether you're at home or on the go.",
  },
  {
    icon: "◇",
    title: "Privacy First",
    description:
      "Your screenshots and study materials stay on your device, giving you more control over your content.",
  },
];

const highlights = [
  { value: "100%", label: "Offline friendly" },
  { value: "3 levels", label: "Organized learning" },
  { value: "Your device", label: "Your study library" },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="StudyVault"
      description="A simple, offline-first way to organize your study screenshots."
    >
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                YOUR STUDY SPACE, ORGANIZED
              </div>

              <Heading as="h1" className={styles.title}>
                Turn scattered screenshots into{" "}
                <span className={styles.titleAccent}>organized knowledge.</span>
              </Heading>

              <p className={styles.subtitle}>
                Meet StudyVault — a calmer way to save, organize, and revisit
                the screenshots you learn from. Everything stays structured,
                right on your Android device.
              </p>

              <div className={styles.actions}>
                <Link className={`button button--primary button--lg ${styles.primaryButton}`} to={siteConfig.urls.download}>
                  Download APK <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  className={`button button--secondary button--lg ${styles.secondaryButton}`}
                  to={siteConfig.urls.documentation}
                >
                  Explore documentation <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className={styles.trustLine}>
                <span className={styles.checkmark}>✓</span>
                Offline-first
                <span className={styles.trustDivider}>·</span>
                <span className={styles.checkmark}>✓</span>
                Built for Android
                <span className={styles.trustDivider}>·</span>
                <span className={styles.checkmark}>✓</span>
                Privacy focused
              </div>
            </div>

            <div className={styles.heroVisual} aria-label="Illustration of the StudyVault app">
              <div className={styles.orb} />
              <div className={styles.floatingLabel}>
                <span className={styles.labelIcon}>✦</span>
                Your learning, in order
              </div>

              <div className={styles.appWindow}>
                <div className={styles.appTopbar}>
                  <div className={styles.appBrand}>
                    <div className={styles.appLogo}>S</div>
                    <div>
                      <span className={styles.appName}>StudyVault</span>
                      <span className={styles.appCaption}>MY STUDY SPACE</span>
                    </div>
                  </div>
                  <span className={styles.menuDots} aria-hidden="true">•••</span>
                </div>

                <div className={styles.appWelcome}>
                  <span className={styles.appGreeting}>YOUR LIBRARY</span>
                  <Heading as="h3" className={styles.appHeading}>Keep learning.</Heading>
                  <p>Everything you saved, all in one place.</p>
                </div>

                <div className={styles.progressCard}>
                  <div className={styles.progressTop}>
                    <div>
                      <span className={styles.mutedLabel}>STUDY COLLECTION</span>
                      <strong>My subjects</strong>
                    </div>
                    <span className={styles.collectionCount}>03</span>
                  </div>
                  <div className={styles.progressTrack}><span /></div>
                  <div className={styles.progressFooter}>
                    <span>Organized for your next session</span>
                    <span className={styles.progressSpark}>✦</span>
                  </div>
                </div>

                <div className={styles.subjectList}>
                  <div className={styles.subjectRow}>
                    <div className={`${styles.subjectIcon} ${styles.subjectViolet}`}>∑</div>
                    <div className={styles.subjectText}>
                      <strong>Mathematics</strong>
                      <span>Algebra · Calculus</span>
                    </div>
                    <span className={styles.subjectArrow}>→</span>
                  </div>
                  <div className={styles.subjectRow}>
                    <div className={`${styles.subjectIcon} ${styles.subjectBlue}`}>⌬</div>
                    <div className={styles.subjectText}>
                      <strong>Computer Science</strong>
                      <span>Data structures · Notes</span>
                    </div>
                    <span className={styles.subjectArrow}>→</span>
                  </div>
                  <div className={styles.subjectRow}>
                    <div className={`${styles.subjectIcon} ${styles.subjectPeach}`}>✳</div>
                    <div className={styles.subjectText}>
                      <strong>Quick revision</strong>
                      <span>Saved screenshots</span>
                    </div>
                    <span className={styles.subjectArrow}>→</span>
                  </div>
                </div>

                <div className={styles.appBottom}>
                  <span><i className={styles.navActive} /> Library</span>
                  <span><i /> Timeline</span>
                  <span><i /> Settings</span>
                </div>
              </div>

              <div className={styles.floatingNote}>
                <span className={styles.noteCheck}>✓</span>
                <span><strong>Saved your way</strong><small>Simple. Structured. Yours.</small></span>
              </div>
            </div>
          </div>

          <div className={`container ${styles.highlights}`}>
            {highlights.map((item) => (
              <div className={styles.highlight} key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={`container ${styles.introGrid}`}>
            <div>
              <span className={styles.sectionEyebrow}>LESS CLUTTER, MORE CLARITY</span>
              <Heading as="h2" className={styles.sectionTitle}>
                Your gallery was never meant to be your notebook.
              </Heading>
            </div>
            <div className={styles.introCopy}>
              <p>
                Useful study screenshots can quickly get lost among everyday
                photos. StudyVault gives them a dedicated home, so you can
                organize what matters and find it when it is time to revise.
              </p>
              <Link className={styles.textLink} to="/docs/getting-started/installation">
                Get started with StudyVault <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>MADE FOR YOUR STUDY FLOW</span>
              <Heading as="h2" className={styles.sectionTitle}>
                Small features. A more organized you.
              </Heading>
              <p>
                Everything you need to keep learning material tidy, accessible,
                and ready for your next revision session.
              </p>
            </div>

            <div className={styles.featureGrid}>
              {features.map((feature, index) => (
                <article className={styles.featureCard} key={feature.title}>
                  <div className={styles.featureCardTop}>
                    <span className={styles.featureIcon} aria-hidden="true">{feature.icon}</span>
                    <span className={styles.featureIndex}>0{index + 1}</span>
                  </div>
                  <Heading as="h3" className={styles.featureTitle}>{feature.title}</Heading>
                  <p>{feature.description}</p>
                  <div className={styles.featureRule} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.workflowSection}>
          <div className={`container ${styles.workflowPanel}`}>
            <div className={styles.workflowCopy}>
              <span className={styles.sectionEyebrow}>A SIMPLE WORKFLOW</span>
              <Heading as="h2" className={styles.sectionTitle}>
                From screenshot to study-ready in a few steps.
              </Heading>
              <p>
                Keep your process simple: save the material, place it where it
                belongs, and come back to it when you revise.
              </p>
            </div>
            <div className={styles.workflowSteps}>
              <div className={styles.workflowStep}>
                <span>01</span>
                <div><strong>Share</strong><p>Send a screenshot to StudyVault from another app.</p></div>
              </div>
              <div className={styles.workflowStep}>
                <span>02</span>
                <div><strong>Organize</strong><p>Choose a subject, chapter, and section.</p></div>
              </div>
              <div className={styles.workflowStep}>
                <span>03</span>
                <div><strong>Revisit</strong><p>Find your saved material whenever you need to study.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`container ${styles.ctaCard}`}>
            <div className={styles.ctaDecor} aria-hidden="true">✦</div>
            <span className={styles.sectionEyebrow}>MAKE ROOM FOR BETTER STUDY SESSIONS</span>
            <Heading as="h2" className={styles.ctaTitle}>
              Your next revision starts with a little more order.
            </Heading>
            <p>Bring your study screenshots together with StudyVault.</p>
            <div className={styles.actions}>
              <Link className={`button button--primary button--lg ${styles.primaryButton}`} to={siteConfig.urls.download}>
                Get StudyVault <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.ctaTextLink} to={siteConfig.urls.documentation}>
                Read the getting started guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
