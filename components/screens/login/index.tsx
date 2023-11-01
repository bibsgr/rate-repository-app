import { View, Image, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import theme from '../../../theme'
import Label from '../../atoms/label/index';
import LoginForm from '../../organisms/login-form/index';
import SocialLoginSection from '../../organisms/social-login/index';
import AuthPrompt from '../../molecules/auth-prompt/index';

const Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1, backgroundColor: theme.colors.background}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View  className="flex ">
                <View  className="flex-row justify-center">
                    <Image source={require('../../../assets/images/login.png')} 
                    style={{width: 200, height: 200}} />
                </View>              
            </View>

            <View 
                style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
                className="flex-1 bg-white px-8 pt-8">

                <LoginForm />

                <Label className="text-xl text-gray-700 font-bold text-center py-5">Or</Label>

                <SocialLoginSection />

                <AuthPrompt 
                    actionText="Sign Up"
                    action={()=> navigation.navigate('SignUp')}>
                    Don't have an account? 
                </AuthPrompt>              
            </View>
        </SafeAreaView>
        
    )
}

export default Login