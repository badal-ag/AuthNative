import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignUpScreen = () => {

    const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password');

    const navigation = useNavigation();
    const [ loading, setLoading ] = useState(false);

    const onRegisterPressed = async(data) => {

        if(loading) {
            return;
        }

        setLoading(true);
        const { username, password, email, name } = data;
        try {
            await Auth.signUp({
                username, 
                password,
                attributes: { email, name, preferred_username: username },
            });
            Alert.alert(`${username} Registered Successfully..`)
            navigation.navigate('ConfirmEmail', {username});
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use Pressed")
    }

    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy Pressed")
    }

    return (

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Create an Account</Text>

                <CustomInput 
                    name="name"
                    placeholder="Full Name" 
                    control={control}
                    rules={{ 
                        required: 'Full Name is Required',
                        minLength: {
                            value: 3,
                            message: 'Name should be more than 3 Characters long',
                        },
                        maxLength: {
                            value: 25,
                            message: 'Name should be not more than 25 Characters long',
                        }, 
                    }}
                />

                <CustomInput 
                    name="username"
                    placeholder="Username" 
                    control={control}
                    rules={{ 
                        required: 'Username is Required',
                        minLength: {
                            value: 5,
                            message: 'Username should be more than 3 Characters long',
                        },
                        maxLength: {
                            value: 11,
                            message: 'Username should be not more than 11 Characters long',
                        }, 
                    }}
                />

                <CustomInput 
                    name="email"
                    placeholder="Email" 
                    control={control}
                    rules={{ 
                            required: 'Email is Required',
                            pattern: {
                                EMAIL_REGEX, message: "Email is Invalid"
                            } 
                    }}
                />

                <CustomInput 
                    name="password"
                    placeholder="Password"
                    control={control}
                    secureTextEntry 
                    rules={{ 
                        required: 'Password is Required',
                        minLength: {
                            value: 8,
                            message: 'Password should be more than 8 Characters long',
                        },
                    }}
                />

                <CustomInput 
                    name="password-confirm"
                    placeholder="Confirm Password" 
                    control={control} 
                    secureTextEntry 
                    rules={{
                        required: 'Confirm Password is Required',
                        validate: value => value === pwd || 'Password do not match',
                    }}
                />

                <CustomButton 
                    text={loading ? "Creating Account..." : "Register"}
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By Registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed} >Terms of Use</Text> and{' '} 
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed} >Privacy Policy</Text>
                </Text>

                <SocialSignInButtons />

                <CustomButton 
                    text="Have an Account? Sign In"
                    onPress={onSignInPressed}
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051c60",
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },

    link: {
        color: '#fdb075',
    },
});

export default SignUpScreen;
