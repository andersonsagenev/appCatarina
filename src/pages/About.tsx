import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../styles/colors';
import { LinearGradient }  from 'expo-linear-gradient';

import StatusBarPage from '../components/StatusBarPage';
import Menu from '../components/Menu';

const About: React.FC = () => {
  return (

    <LinearGradient colors={['#1ddbb9', '#132742']}
    style={{ flex:1, justifyContent: 'center'}}>
      <StatusBarPage
      barStyle='ligth-content'
      backgroundColor="#1ddbb9" />
      <Text>About!</Text>
      <Menu/>
     
    </LinearGradient>

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