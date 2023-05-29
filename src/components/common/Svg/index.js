import React from 'react';
import { oneOf, string } from 'prop-types';
import classnames from 'classnames';

// small icons
// import glass from 'assets/svgs/glass.svg';
// import check from 'assets/svgs/check.svg';
// import lightbulb from 'assets/svgs/lightbulb.svg';
// import pen from 'assets/svgs/pen.svg';
// import target from 'assets/svgs/target.svg';

// import process from 'assets/svgs/process.svg';
// import question from 'assets/svgs/question.svg';
// import heart from 'assets/svgs/heart.svg';
// import email from 'assets/svgs/email.svg';
// import emailSelected from 'assets/svgs/emailSelected.svg';
// import greenExclamation from 'assets/svgs/green_exclamation.svg';
// import greenHeart from 'assets/svgs/green_heart.svg';
// import greenQuestion from 'assets/svgs/green_question.svg';
// import greenKey from 'assets/svgs/green_key.svg';
import behance from 'assets/svgs/behance.svg';
import linkedin from 'assets/svgs/linkedin.svg';
import instagram from 'assets/svgs/instagram.svg';
import quoteYellow from 'assets/svgs/quote_yellow.svg';
import downChevron from 'assets/svgs/down_chevron.svg';
import upChevron from 'assets/svgs/up_chevron.svg';
import styles from './index.css';

// flexible icons
import logo from 'assets/icons/logo'

const iconMapper = {
  logo,
};

const imageMapper = {
  // process,
  // question,
  // heart,
  // glass,
  // greenExclamation,
  // greenHeart,
  // greenKey,
  // greenQuestion,
  // check,
  // lightbulb,
  // pen,
  // target,
  // email,
  // emailSelected,
  behance,
  downChevron,
  linkedin,
  instagram,
  quoteYellow,
  upChevron,
}

const Svg = (props) => {
  const {
    viewBox,
    icon,
    image,
    className,
  } = props;

  const imageClass = classnames({
    [styles.svgImage]: true,
    [className]: className ? true : false
  });

  if (image) {
    return <img className={imageClass} src={imageMapper[image]} />
  }

  const iconClass = classnames({
    [className]: className ? true : false
  });

  return (
    <svg
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width="30"
      height="30"
    >
      {iconMapper[icon]}
    </svg>
  );
};

Svg.propTypes = {
  viewBox: string,
  className: string,
  image: oneOf(Object.keys(imageMapper)),
  icon: oneOf([
    'logo',
  ]),
};

Svg.defaultProps = {
  className: '',
  image: null,
  viewBox: '0 0 1200 1200',
};

export default Svg;
