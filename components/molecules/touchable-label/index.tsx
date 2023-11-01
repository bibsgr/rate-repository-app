import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Label from '../../atoms/label/index';

const TouchableLabel = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Label style={style}> {children} </Label>   
    </TouchableOpacity>
  )
};

export default TouchableLabel;
