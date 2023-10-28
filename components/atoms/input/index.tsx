import React from 'react';
import { TextInput } from 'react-native';

const Input = ({type,placeholder, value, ...props }) => {
  return (
    <TextInput 
        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3 "
        type= {type}
        placeholder={placeholder}
        value={value} 
        {...props}
    />
  );
};

export default Input;
