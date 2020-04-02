import React from "react";
import styles from "./styles.module.css";

class ContributorProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.profile}>
        <div className="avatar">
          <img
            className="avatar__photo avatar__photo--lg"
            src={this.props.avatar}
          />
          <div className="avatar__intro">
            <h4 className="avatar__name">{this.props.name}</h4>
            <small className="avatar__subtitle">
              <a href={this.props.url}>{this.props.url}</a>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default ContributorProfile;
