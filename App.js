import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{ padding: 15, alignItems: 'center', borderRadius: 5, flex: 1 }}>
      <View style={styles.container}>

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Checking...</Text>
      </View>
              </LinearGradient>

    );
  }
}
