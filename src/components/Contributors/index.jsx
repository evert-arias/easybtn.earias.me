import React from "react";
import ContributorProfile from "../ContributorProfile";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Octokit } from "@octokit/rest";
let octokit = new Octokit();

class Contributors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: []
    };
  }

  componentDidMount() {
    octokit.repos
      .listContributors({
        owner: this.props.owner,
        repo: this.props.repo
      })
      .then(
        result => {
          this.setState({
            contributors: [...result.data]
          });
        },
        error => {
          this.setState({
            contributors: []
          });
        }
      );
  }
  render() {
    return (
      <div className={styles.contributors}>
        {this.state.contributors && this.state.contributors.length
          ? this.state.contributors.map(contributor => {
              return (
                <ContributorProfile
                  avatar={contributor.avatar_url}
                  name={contributor.login}
                  url={contributor.html_url}
                />
              );
            })
          : undefined}
      </div>
    );
  }
}

export default Contributors;
