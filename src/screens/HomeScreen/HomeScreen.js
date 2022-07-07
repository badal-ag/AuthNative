import { View, Text, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

const HomeScreen = () => {

    const signOut = () => {
        Auth.signOut();
        Alert.alert('Success', 'SignOut Successful. Redirecting to Sign In Page...')
        navigation.navigate('SignIn');
    }

    return (
        <View>
        <Text style={{ fontSize: 24, alignSelf: 'center' }}>Home Sweet Home</Text>
        <Text 
            onPress={signOut}
            style={{
                width: '100%',
                textAlign: 'center',
                color: 'red',
                marginTop: 'auto',
                marginVertical: 20,
                fontSize: 20
            }}>
            Sign Out
        </Text>
        </View>
    )
}

export default HomeScreen;