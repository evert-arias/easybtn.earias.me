import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Small footprint</>,
    imageUrl: "img/feature-small-footprint.svg",
    description: (
      <>
        EasyButton has an small footprint and does not depend on third party
        libraries making it very easy to install and include in your project.
      </>
    )
  },
  {
    title: <>Non-blocking</>,
    imageUrl: "img/feature-non-blocking.svg",
    description: (
      <>
        EasyButton is a non-blocking library, which means it won't affect the
        rest of your code with dangerous delays that impact the overall
        performance of your code.
      </>
    )
  },
  {
    title: <>Intuitive API</>,
    imageUrl: "img/feature-intuitive-api.svg",
    description: (
      <>
        Handling buttons is a simple task on arduino, but the code can look very
        ugly, full of conditions and delays that are not safe at all. EasyButton
        not only saves you development time, it also provides an easy and
        intuitive API for handling buttons with callbacks.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Arduino Library For Buttons"
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={
                "https://github.com/evert-arias/EasyButton/archive/v1.1.1.zip"
              }
            >
              Download
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
