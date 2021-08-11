import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { ExpoLeaflet } from "expo-leaflet";

 let marker = {
          id: '1',
          coords: { lat: 36.00, lng: -76.00 },
          icon: "<div>❤️</div>",
          size: [24, 24]
        }

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
       
       <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        /> 
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
