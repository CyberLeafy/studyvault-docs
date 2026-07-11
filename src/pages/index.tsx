import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import styles from "./index.module.css";

const features = [
  {
    title: "Share to Import",
    description:
      "Import one or multiple screenshots directly from any app using Android's Share menu.",
  },
  {
    title: "Smart Organization",
    description:
      "Organize your study material using Subjects, Chapters, and Sections.",
  },
  {
    title: "Screenshot Gallery",
    description:
      "View, zoom, swipe, and manage all your screenshots in one place.",
  },
  {
    title: "Study Tracker",
    description:
      "Track your preparation with an easy-to-use study timeline.",
  },
  {
    title: "Offline First",
    description:
      "Everything works completely offline without requiring an internet connection.",
  },
  {
    title: "Privacy Focused",
    description:
      "Your screenshots and study data remain on your device.",
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="StudyVault"
      description="Organize your study screenshots with an offline-first experience."
    >
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <Heading as="h1" className={styles.title}>
              Study Vault
            </Heading>

            <p className={styles.subtitle}>
              Organize your study screenshots effortlessly.
            </p>

            <p className={styles.description}>
              StudyVault is an offline-first Android application that helps
              students organize screenshots into Subjects, Chapters, and
              Sections for a cleaner and more productive study experience.
            </p>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                href="/download"
              >
                Download APK
              </Link>

              <Link
                className="button button--secondary button--lg"
                to="/docs/getting-started/installation"
              >
                Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">About StudyVault</Heading>

            <p>
              StudyVault is designed for students who prefer learning from
              screenshots. Instead of keeping hundreds of screenshots scattered
              across the gallery, StudyVault lets you organize everything into a
              structured hierarchy, making your study material easy to find and
              review.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Features</Heading>

            <div className={styles.grid}>
              {features.map((feature) => (
                <div key={feature.title} className={styles.card}>
                  <Heading as="h3">{feature.title}</Heading>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why StudyVault */}
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2">Why StudyVault?</Heading>

            <p>
              StudyVault provides a clean, distraction-free environment for
              managing study screenshots. With offline support, privacy-first
              storage, and an intuitive organization system, you can focus on
              learning instead of searching through your gallery.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
