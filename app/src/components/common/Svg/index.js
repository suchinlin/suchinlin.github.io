import React from 'react';
import { oneOf, string } from 'prop-types';

import glass from 'assets/svgs/glass.svg';
import styles from './index.css';

const iconMapper = {
  qrCodeOutline: 'sampleSvgIconFile',
};

const imageMapper = {
  glass,
}

const Svg = (props) => {
  const {
    viewBox,
    icon,
    image
  } = props;

  if (image) {
    return <img className={styles.svgImage} src={imageMapper[image]} />
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
  image: oneOf([
    'glass',
  ]),
  icon: oneOf([
    'qrCodeOutline',
  ]),
};

Svg.defaultProps = {
  image: '',
  viewBox: '0 0 32 32',
};

export default Svg;
