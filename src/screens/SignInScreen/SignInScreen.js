import { useState } from 'react';
import { View, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo_1.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignInScreen = () => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign In Button Pressed")
    }

    const onSignUpPressed = () => {
        console.warn("Sign Up Button Pressed")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password Button Pressed")
    }

    return (

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain"
                />

                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry 
                />

                <CustomButton 
                    text="Sign In"
                    onPress={onSignInPressed}
                />

                <CustomButton 
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButtons />

                <CustomButton 
                    text="Don't have an Account? Create One"
                    onPress={onSignUpPressed}
                    type="TERTIARY"
                />

            </View>

        </ScrollView>
        
    );
}


const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 20,
    },

    logo: {
        width: '70%',
    }
});

export default SignInScreen;
