import React from "react";
import { node, func, object, arrayOf } from 'prop-types';

import { getElmHeight, sumList } from "utils/helpers";

const outroNavFromTop = 150;

class OutroScrollDetector extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.outro = React.createRef();
    this.state = {
      index: null,
      progress: props.refs.map(Number.prototype.valueOf, 0) // initiate with 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.getCurrentIndex();
    this.getSectionScrolledPercentage();
  }

  getCurrentIndex() {
    const { refs, onOutroIndexChange } = this.props;
    // reverse so we can always get the last index that is < outroNavFromTop
    const currentIndex = [...Array(refs.length).keys()].reverse().find(index => {
      const ref = refs[index];
      if (ref && ref.current) {
        const elementFromTop = ref.current.getBoundingClientRect().top;
        return elementFromTop < outroNavFromTop;
      }
    });
    onOutroIndexChange(currentIndex);
  }

  getSectionScrolledPercentage() {
    const { refs, onOutroIndexPercentScrolledChange } = this.props;

    const totalOutroScrollable = this.outro.current.scrollHeight + outroNavFromTop; // for the 150 top margin

    const firstOutroElem = refs[0];
    // outroStart when its scrolled into view
    // const outroStart = window.pageYOffset + firstOutroElem.current.getBoundingClientRect().top;
    // const outroScrolled = window.pageYOffset + window.innerHeight - outroStart;

    // outroStart when its near the top
    const outroStart = window.pageYOffset + firstOutroElem.current.getBoundingClientRect().top - outroNavFromTop;
    const outroScrolled = window.pageYOffset - outroStart;

    const elementHeightPercentList = refs.map(ref => {
      if (ref && ref.current) {
        const elemHeight = getElmHeight(ref.current);
        return elemHeight / totalOutroScrollable * 100;
      }
    });
    // get the percentage of the outro scrolled based on total outroll scrollable
    const scrolledPercent = outroScrolled / totalOutroScrollable * 100

    const indexProgressPercentage = [...Array(refs.length).keys()].map(index => {
      // get scrolledPercent and divide it by the threshold where it ends
      const percentStartpoint = sumList(elementHeightPercentList.slice(0, index));
      const percentBreakpoint = sumList(elementHeightPercentList.slice(0, index + 1));

      // only calculate the amount from the start to the end
      const sectionTotalPercent = percentBreakpoint - percentStartpoint;
      const sectionScrolledPercent = scrolledPercent - percentStartpoint;

      const percent = Math.round(sectionScrolledPercent / sectionTotalPercent * 100);
      if (percent < 100) {
        return percent > 0 ? percent : 0;
      }
      return 100;
    });

    if (onOutroIndexPercentScrolledChange) {
      onOutroIndexPercentScrolledChange(indexProgressPercentage);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={this.outro}>
        {children}
      </div>
    );
  }
}

OutroScrollDetector.propTypes = {
  onOutroIndexChange: func.isRequired,
  onOutroIndexPercentScrolledChange: func,
  refs: arrayOf(object).isRequired,
  children: node.isRequired,
};

export default OutroScrollDetector;
