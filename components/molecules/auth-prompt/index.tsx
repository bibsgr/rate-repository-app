import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';
import Label from '../../atoms/label/index';
import TouchableLabel from '../touchable-label/index';
import theme from '../../../theme';

const AuthPrompt = ({actionText, action, children }) => {
  return (
    <View className="flex-row justify-center mt-7">
        <Label className="text-gray-500 font-semibold">{children}</Label>
        <TouchableLabel onPress={action} style={styles.actionLabel}>
            {actionText}
        </TouchableLabel>
    </View>
  );
};

const styles = StyleSheet.create({
  actionLabel: {
      color:theme.colors.primary,
      fontWeight: 'bold'
  },
});

export default AuthPrompt;
