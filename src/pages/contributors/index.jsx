import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Contributors from "../../components/Contributors";

function ContributorsPage() {
  return (
    <Layout title="Thanks">
      <div className={styles.head}>
        <h2>Thank you all for your contributions</h2>
      </div>
      <div className={styles.special}>
        <h4>
          Special thanks 🙏🏻 to <a href="#">Jose Gabriel Companioni</a> for his
          active support.
        </h4>
      </div>
      <Contributors owner="evert-arias" repo="EasyButton" />
    </Layout>
  );
}

export default ContributorsPage;
