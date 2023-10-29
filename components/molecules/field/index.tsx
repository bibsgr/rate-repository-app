import React from 'react';
import { View } from 'react-native';
import Label from '../../atoms/label/index';
import Input from '../../atoms/input/index';

const Field = ({label, type, placeholder, value, ...props }) => {
  return (
    <View>
        <Label className="text-gray-700 ml-4 mb-2">{label}</Label>
        <Input
            
            type= {type}
            placeholder={placeholder}
            value={value}
            {...props}
        />
    </View>
  );
};

export default Field;
