import React from 'react';
import { node, string } from 'prop-types';

const IconLabelText = ({icon, label, children}) => {
  return (
    <div>
      {icon}
      <div className="font-400 margin-top-16">
        {label}
      </div>
      <div className="margin-top-16">
        {children}
      </div>
    </div>
  );
};

IconLabelText.propTypes = {
  icon: node.isRequired,
  label: string.isRequired,
  children: node.isRequired,
};

IconLabelText.defaultProps = {
};

export default IconLabelText;
