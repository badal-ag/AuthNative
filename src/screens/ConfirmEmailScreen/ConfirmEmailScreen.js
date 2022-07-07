import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {

    const { control, handleSubmit, watch } = useForm({ defaultValues: {username: user}});

    const route = useRoute();
    const [ loading, setLoading ] = useState(false);
    const [ load, setLoad ] = useState(false);
    const navigation = useNavigation();
    const user = watch('username');

    const onConfirmPressed = async (data) => {

        if(loading) {
            return;
        }
        setLoading(true);   

        try {
            await Auth.confirmSignUp(data.username, data.code);
            Alert.alert('Email Confirmed Successfully. Redirecting to Sign In Page..')
            navigation.navigate('SignIn')
        } catch(e) {
            Alert.alert('Oops', e.message);
        }

        setLoading(false);

        
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    const onResendCodePressed = async () => {

        if(load) {
            return;
        }
        setLoad(true);

        try {
            await Auth.resendSignUp(user);
            Alert.alert('Success', 'New Code has been sent on your email.')
        } catch(e) {
            Alert.alert('Oops', e.message);
        }

        setLoad(false);
    }

    return (

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Confirm your Email</Text>

                <CustomInput 
                    name="username"
                    control={control}
                    placeholder="Enter the Username" 
                    rules={{
                        required: 'Confirmation Code is Required'
                    }}
                />

                <CustomInput 
                    name="code"
                    control={control}
                    placeholder="Enter the Confirmation Code" 
                    rules={{
                        required: 'Confirmation Code is Required'
                    }}
                />

                <CustomButton 
                    text={loading ? "Confirming the Code..." : "Confirm"}
                    onPress={handleSubmit(onConfirmPressed)}
                />

                <CustomButton 
                    text={load ? "Resending the Code..." : "Resend Code"}
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
