import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import theme from '../../../theme'
import { useNavigation } from '@react-navigation/native';
import SocialLoginSection from '../../organisms/social-login/index';
import SignInForm from '../../organisms/sign-in-form/index';
import AuthPrompt from '../../molecules/auth-prompt/index';
import IconButton from '../../molecules/icon-button/index';
import BackButton from '../../molecules/back-button/index';

export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: theme.colors.background}}>
      <View className="flex">
    
        <BackButton>{()=> navigation.goBack()}</BackButton>

        <View className="flex-row justify-center">
            <Image source={require('../../../assets/images/signup.png')} 
                style={{width: 165, height: 110}} />
        </View>

      </View>
      
      <View className="flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>

        <SignInForm />

        <Text className="text-xl text-gray-700 font-bold text-center py-5"> Or </Text>
        
        <SocialLoginSection />

        <AuthPrompt 
            actionText="Login"
            action={()=> navigation.navigate('Login')}>
             Already have an account? 
        </AuthPrompt>

      </View>
    </View>
  )
}
