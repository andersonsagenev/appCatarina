import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>About!</Text>
      <StatusBar style="auto" />
    </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default About;