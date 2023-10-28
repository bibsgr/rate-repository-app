import React from 'react';
import { Image } from 'react-native';

const Icon = ({ source, ...props }) => {
  return <Image source={source} {...props} />;
};

export default Icon;
