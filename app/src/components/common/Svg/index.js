import React from 'react';
import { oneOf, string } from 'prop-types';
import classnames from 'classnames';

import process from 'assets/svgs/process.svg';
import question from 'assets/svgs/question.svg';
import heart from 'assets/svgs/heart.svg';
import styles from './index.css';

const iconMapper = {
  qrCodeOutline: 'sampleSvgIconFile',
};

const imageMapper = {
  process,
  question,
  heart,
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

  return (
    <svg
      className={`ionicon ${icon}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      {iconMapper[icon]}
    </svg>
  );
};

Svg.propTypes = {
  viewBox: string,
  className: string,
  image: oneOf([
    'process',
    'question',
    'heart',
  ]),
  icon: oneOf([
    'qrCodeOutline',
  ]),
};

Svg.defaultProps = {
  className: '',
  image: '',
  viewBox: '0 0 32 32',
};

export default Svg;
