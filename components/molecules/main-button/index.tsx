import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Label from '../../atoms/label/index';

const MainButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        className="py-3 bg-yellow-400 mx-7 rounded-xl">
        <Label className="text-xl font-bold text-center text-gray-700"> {children} </Label>
    </TouchableOpacity>
  )
};

export default MainButton;
