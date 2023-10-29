import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';
import Label from '../../atoms/label/index';
import theme from '../../../theme';

const parseThousands = (value) =>
    value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);

const StatItem = ({actionText, value, children }) => {
  return (
    <View>
        <Label style={{fontWeight:"bold", color: "orange", textAlign:"center"}}>
          {parseThousands(value)}
        </Label>
        <Label>{children}</Label>
    </View>
  );
};

export default StatItem;
