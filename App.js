import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './src/navigation';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);


export default function App() {
  return (
    <SafeAreaView style={styles.root}>

      <Navigation />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    
    root: {
      flex: 1,
      backgroundColor: '#F9FBFC',
    },

});
