import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Label = ({className, style, children }) => {
  return <Text className={className} style={[styles.label, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    
  },
});

export default Label;
