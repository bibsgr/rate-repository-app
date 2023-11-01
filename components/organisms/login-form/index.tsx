import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Field from '../../molecules/field';
import TouchableLabel from '../../molecules/touchable-label/index';
import MainButton from '../../molecules/main-button/index';

const LoginForm = () => {
    const navigation = useNavigation() 
    return (      
        <View className="form space-y-2">
            <Field
                label="Email Address"
                type="email"
                placeholder="email"
                value="john@gmail.com"                  
            />

            <Field 
                label="Password"
                placeholder="password"
                value="test12345" 
                secureTextEntry
            />
            
            <TouchableLabel ClassName="flex items-end">
                Forgot Password?
            </TouchableLabel>

            <MainButton onPress={()=> navigation.navigate('Home')}> Login </MainButton>        
        </View>
    )
};

export default LoginForm;
