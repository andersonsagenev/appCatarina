import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

const SupportScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Support Screen</Text>
        <Menu/>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
