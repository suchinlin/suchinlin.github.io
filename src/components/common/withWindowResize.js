import React from "react";

const withWindowResize = Component => {
  class WrappedComponent extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isMobile: this.isMobile()
      };

      this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    isMobile() {
      return document.body.offsetWidth <= 500;
    }

    handleResize() {
      this.setState({
        isMobile: this.isMobile()
      });
    }

    render() {
      return <Component size={this.state} />;
    }
  }

  return WrappedComponent;
};

export default withWindowResize;
