import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from '../../atoms/icon/index';

const IconButton = ({ iconSource, onPress }) => {
  return (
    <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl" onPress={onPress}>
      <Icon source={iconSource} className="w-10 h-10" />
    </TouchableOpacity>
  );
};

export default IconButton;
