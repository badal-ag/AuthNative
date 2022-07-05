import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {

    const [ code, setCode ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home')
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    
    return (

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Reset Your Password</Text>

                <CustomInput 
                    placeholder="Enter Confirmation Code" 
                    value={code} 
                    setValue={setCode}
                />

                <CustomInput 
                    placeholder="Enter New Password" 
                    value={newPassword} 
                    setValue={setNewPassword}
                    secureTextEntry
                />

                <CustomButton 
                    text="Submit"
                    onPress={onSubmitPressed}
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
