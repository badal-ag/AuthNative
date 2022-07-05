import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const [ code, setCode ] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('Home')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const onResendCodePressed = () => {
        console.warn("Resend Code Button Pressed")
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

                <CustomButton 
                    text="Resend Code"
                    onPress={onResendCodePressed}
                    type="SECONDARY"
                />

                <CustomButton 
                    text="Back to Sign In"
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
