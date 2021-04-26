import React from "react";
import { node, func, object, arrayOf } from 'prop-types';

// import { getElmHeight, sumList } from "utils/helpers";


class OutroScrollDetector extends React.Component {
  constructor(props) {
    super(props);
    this.handleScrollOffsetTop = this.handleScrollOffsetTop.bind(this);
    this.outro = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollOffsetTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollOffsetTop);
  }

  handleScrollOffsetTop() {
    const { refs, onOutroChange } = this.props;

    refs.map((ref, index) => {
      if (ref && ref.current) {
        const elementFromTop = ref.current.getBoundingClientRect().top;
        // the navigation is about 60px apart in height
        const offsetFromNavCircle = (index + 1) * 20;
        // must not be negative which means its passed the top
        if (elementFromTop < (150 + offsetFromNavCircle)) {
          onOutroChange({index: index});
        }
        console.log('index', index, ref.current.getBoundingClientRect().top);
      }
    });
  }

  handleScroll() {
    // const { refs, onOutroChange } = this.props;

    // const totalOutroScrollable = this.outro.current.scrollHeight + 150; // for the 150 top margin

    // const firstOutroElem = refs[0];
    // const outroStart = window.pageYOffset + firstOutroElem.current.getBoundingClientRect().top;
    // const outroScrolled = window.pageYOffset + window.innerHeight - outroStart;

    // const elementHeightPercentList = refs.map(ref => {
    //   if (ref && ref.current) {
    //     const elemHeight = getElmHeight(ref.current);
    //     return elemHeight / totalOutroScrollable * 100;
    //   }
    // });

    // // get the percentage of the outro scrolled based on total outroll scrollable
    // const scrolledPercent = outroScrolled / totalOutroScrollable * 100

    // // add some padding before considering the section has been scrolled to.
    // // start the padding when scrolled 20% into the content
    // const minPadding = .80;

    // elementHeightPercentList.map((percent, index) => {
    //   const minPercentage = percent - (percent * minPadding);
    //   // where the start point of the element is
    //   const percentStartPoint = sumList(elementHeightPercentList.slice(0, index)) + minPercentage;
    //   // breakpoint where it stops
    //   const percentBreakpoint = scrolledPercent + sumList(elementHeightPercentList.slice(index + 1)) > 100;
    //   if (scrolledPercent > percentStartPoint && !percentBreakpoint) {
    //     onOutroChange({ index });
    //   }
    // });
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
  onOutroChange: func.isRequired,
  refs: arrayOf(object).isRequired,
  children: node.isRequired,
};

export default OutroScrollDetector;
