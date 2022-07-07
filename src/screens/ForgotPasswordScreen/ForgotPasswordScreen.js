import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {

    const { 
        control, 
        handleSubmit
    } = useForm();

    const [load, setLoad] = useState(false);
    const navigation = useNavigation();

    const onSendPressed = async (data) => {

        if(load) {
            return;
        }
        setLoad(true);

        try {
            await Auth.forgotPassword(data.username);
            Alert.alert('Success', 'New Code has been sent on your email.')
            navigation.navigate('NewPassword')
        } catch(e) {
            Alert.alert('Oops', e.message);
        }

        setLoad(false);
        
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    
    return (

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Reset your Password</Text>

                <CustomInput
                    name="username"
                    control={control} 
                    placeholder="Enter the Username"
                    rules={{
                        required: 'Username is Required'
                    }} 
                    
                />

                <CustomButton 
                    text={load ? "Sending the Code..." : "Send Code"}
                    onPress={handleSubmit(onSendPressed)}
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

export default ForgotPasswordScreen;
