import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  render() {
    return (
      <div className="Contest">
        <div className="contest-description">
          {this.props.description}
        </div>
        <div className="home-link link"
             onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
};

export default Contest;
