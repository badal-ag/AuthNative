import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {

    const [ username, setUsername ] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('NewPassword')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    
    return (

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Reset your Password</Text>

                <CustomInput 
                    placeholder="Enter the Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomButton 
                    text="Send Code"
                    onPress={onSendPressed}
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
