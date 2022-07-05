import { View, StyleSheet, TextInput } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {

    
    const onSignInWithFacebook = () => {
        console.warn("Sign In with Facebook Pressed")
    }

    const onSignInWithGoogle = () => {
        console.warn("Sign In with Google Pressed")
    }

    const onSignInWithApple = () => {
        console.warn("Sign In with Apple Pressed")
    }

    return (
        <>

            <CustomButton 
                text="Sign In with Facebook"
                onPress={onSignInWithFacebook}
                bgColor="#e7eaf4"
                fgColor="#4765a9"
            />

            <CustomButton 
                text="Sign In with Google"
                onPress={onSignInWithGoogle}
                bgColor="#fae9ea"
                fgColor="#dd4d44"
            />

            <CustomButton 
                text="Sign In with Apple"
                onPress={onSignInWithApple}
                bgColor="#e3e3e3"
                fgColor="#363636"
            />      
            
        </>
    );
}


const styles = StyleSheet.create({

    
});

export default SocialSignInButtons;
