import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./download.module.css";

const DETAILS = [
  { label: "Platform", value: "Android" },
  { label: "Minimum Android", value: "Android 10" },
  { label: "APK Size", value: "102 MB" },
  // { label: "Release Date", value: "July 2026" },
  { label: "Current Version", value: "v1.0.0" },
  // { label: "Offline Support", value: "Yes" },
];

const STEPS = [
  "Download the APK.",
  "Open the downloaded file.",
  "Tap Install.",
  "Open StudyVault.",
];

const FEATURES = [
  "Offline First",
  "Subjects, Chapters & Sections",
  "Share to Import",
  "Screenshot Gallery",
  "Study Tracker",
  "Privacy Focused",
];

export default function Download() {
  return (
    <Layout
      title="Download"
      description="Download the latest version of StudyVault."
    >
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <Heading as="h1" className={styles.title}>
              Download StudyVault
            </Heading>
            <p className={styles.subtitle}>
              The latest stable release, built for Android.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.badge}>Stable</span>
              <Heading as="h2" className={styles.cardTitle}>
                StudyVault v1.0.0
              </Heading>
            </div>

            <dl className={styles.info}>
              {DETAILS.map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <Link className={styles.downloadButton} href="https://github.com/CyberLeafy/studyvault-docs/releases/download/v1.0.0/StudyVault-v1.0.0.apk">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Download current version
            </Link>
            <Link
              className={styles.notes}
              href="https://github.com/CyberLeafy/studyvault-docs/releases/latest"
            >
              Release Notes
            </Link>
            <p>Last Update: July 2026</p>
          </div>

          <div className={styles.columns}>
            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>
                Installation
              </Heading>
              <ol className={styles.steps}>
                {STEPS.map((step, i) => (
                  <li key={i}>
                    <span className={styles.stepNumber}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>
                What's Included
              </Heading>
              <ul className={styles.features}>
                {FEATURES.map((feature) => (
                  <li key={feature}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
