import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <React.Fragment />
  }
}

ScrollToTop.propTypes = {
  location: shape({ pathname: string }).isRequired,
};

ScrollToTop.defaultProps = {};

export default withRouter(ScrollToTop)
