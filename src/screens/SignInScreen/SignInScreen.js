import { useState } from 'react';
import { View, StyleSheet, Image, useWindowDimensions, ScrollView, TextInput , Alert } from 'react-native';
import Logo from '../../../assets/images/logo_1.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignInScreen = () => {

    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const [ loading, setLoading ] = useState(false);

    const { 
        control, 
        handleSubmit, 
        formState: {errors} 
    } = useForm();

    const onSignInPressed = async(data) => {

        if(loading) {
            return;
        }

        setLoading(true);
        try {
            const response = await Auth.signIn( data.username, data.password);
            Alert.alert('Signed In Successfully. Redirecting to Home Page..')
            console.warn(response)
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);

        //console.log(data)
        //navigation.navigate('Home')
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp')
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword')
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
                    name="username"
                    placeholder="Username" 
                    control={control}
                    rules={{ required: 'Username is Required' }}
                />

                <CustomInput 
                    name="password"
                    placeholder="Password" 
                    secureTextEntry
                    control={control}
                    rules={{ 
                        required: 'Password is Required',
                        minLength: {
                            value: 8,
                            message: 'Password should be more than 8 Characters long',
                        },
                    }}
                />
                
                <CustomButton 
                    text={loading ? "Loading..." : "Sign In"}
                    onPress={handleSubmit(onSignInPressed)}
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
