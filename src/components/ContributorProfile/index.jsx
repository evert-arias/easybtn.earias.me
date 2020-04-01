import React from "react";
import styles from "./styles.module.css";
import { Octokit } from "@octokit/rest";

let octokit = new Octokit();

class ContributorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    octokit.users
      .getByUsername({
        username: this.props.username
      })
      .then(
        result => {
          this.setState({
            profile: {
              name: result.data.name,
              url: result.data.html_url,
              avatar: result.data.avatar_url
            }
          });
        },
        error => {
          this.setState({
            profile: {
              name: "n/a",
              url: "https://github.com",
              avatar: "img/profile.png"
            }
          });
        }
      );
  }

  render() {
    return (
      <div className={styles.profile}>
        <div className="avatar">
          <img
            className="avatar__photo avatar__photo--lg"
            src={this.state.profile.avatar}
          />
          <div className="avatar__intro">
            <h4 className="avatar__name">{this.state.profile.name}</h4>
            <small className="avatar__subtitle">
              <a href={this.state.profile.url}>{this.state.profile.url}</a>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default ContributorProfile;
