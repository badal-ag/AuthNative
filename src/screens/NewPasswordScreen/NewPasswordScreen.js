import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const NewPasswordScreen = () => {

    const { 
        control, 
        handleSubmit
    } = useForm();
    
    const [load, setLoad] = useState(false);
    const navigation = useNavigation();

    const onSubmitPressed = async (data) => {
        
        if(load) {
            return;
        }
        setLoad(true);

        try {
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            Alert.alert('Password Changed Successfully. Redirecting to Sign In Page..')
            navigation.navigate('SignIn')
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

                <Text style={styles.title}>Reset Your Password</Text>

                <CustomInput 
                    name="username"
                    control={control}
                    placeholder="Username" 
                    rules={{
                        required: 'Username is Required'
                    }}
                />

                <CustomInput 
                    name="code"
                    control={control}
                    placeholder="Enter Confirmation Code" 
                    rules={{
                        required: 'Confirmation Code is Required'
                    }}
                />

                <CustomInput 
                    name="password"
                    control={control}
                    placeholder="Enter New Password"
                    rules={{
                        required: 'Password is Required',
                        minLength: {
                            value: 8,
                            message: 'Password should be more than 8 Characters long',
                        },
                    }}
                    secureTextEntry
                />

                <CustomButton 
                    text={load ? "Changing the Password..." : "Change Password"}
                    onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen;
