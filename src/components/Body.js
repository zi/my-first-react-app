import React from "react";
import { PropTypes } from "prop-types";

import "./Body.css";

class Body extends React.Component {
  render() {
    const { cover, title, description } = this.props;
    return (
      <main className="Body">
        <img src={cover} alt={title} />
        <div className="content">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      </main>
    );
  }
}

Body.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Body;