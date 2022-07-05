import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const ConfirmEmailScreen = () => {

    const [ code, setCode ] = useState('');

    const onConfirmPressed = () => {
        console.warn("Confirm Button Pressed")
    }

    const onSignInPressed = () => {
        console.warn("Sign In Pressed")
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

                <Text style={styles.title}>Confirm your Email</Text>

                <CustomInput 
                    placeholder="Enter the Confirmation Code" 
                    value={code} 
                    setValue={setCode}
                />

                <CustomButton 
                    text="Confirm"
                    onPress={onConfirmPressed}
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

export default ConfirmEmailScreen;
