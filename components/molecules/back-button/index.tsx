import React from 'react';
import { View } from 'react-native';
import IconButton from '../icon-button/index';

const BackButton = ({ children }) => {
    return (
        <View className="flex-row justify-start">
            <IconButton
                iconSource={require('../../../assets/icons/chevron-left.png')}
                onPress={children}
            />
        </View>
    );
};

export default BackButton;
