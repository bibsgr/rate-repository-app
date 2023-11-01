import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Field from '../../molecules/field/index';
import MainButton from '../../molecules/main-button/index';

const SignInForm = ({ onPress, children }) => {
    const navigation = useNavigation() 
    return (      
        <View className="form space-y-2">
            <Field 
                label= "Full Name"
                value="john snow"
                placeholder='Enter Name'
            />
            <Field
                label= "Email Address"
                value="john@gmail.com"
                placeholder='Enter Email'
            />
            <Field
                label= "Password"
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <MainButton> Sign Up </MainButton>
        </View>
    )
};

export default SignInForm;
