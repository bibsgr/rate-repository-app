import React from 'react';
import { View } from 'react-native';
import IconButton from '../../molecules/icon-button/index';

const SocialLoginSection = () => {
  const handleGoogleLogin = () => {
    // Logic to log in with Google
  };

  const handleFacebookLogin = () => {
    // Logic to log in with Facebook
  };

  const handleAppleLogin = () => {
    // Logic to log in with Apple
  };

  return (
    <View className="flex-row" style={{justifyContent: 'space-around'}}>
      <IconButton
        iconSource={require('../../../assets/icons/google.png')}
        onPress={handleGoogleLogin}
      />
      <IconButton
        iconSource={require('../../../assets/icons/facebook.png')}
        onPress={handleFacebookLogin}
      />
      <IconButton
        iconSource={require('../../../assets/icons/apple.png')}
        onPress={handleAppleLogin}
      />
    </View>
  );
};

export default SocialLoginSection;
