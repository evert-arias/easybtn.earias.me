import React from "react";
import ContributorProfile from "../ContributorProfile";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Contributors = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <div className={styles.contributors}>
      {siteConfig.customFields.contributors.map(user => {
        return <ContributorProfile username={user} />;
      })}
    </div>
  );
};

export default Contributors;
