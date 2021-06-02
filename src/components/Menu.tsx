import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from  '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import StatusBarPage from '../components/StatusBarPage';

const Menu: React.FC = () => {
    const navigation = useNavigation();
  return (

    <View style={styles.buttonMenu}>
      <TouchableOpacity 
        onPress={ () => navigation.openDrawer() }>
        <Feather name="menu" size={40} color="#FFF" />
    </TouchableOpacity>
    
    </View>
    )
}

const styles = StyleSheet.create({
  buttonMenu: {
    top: Platform.OS === 'ios' ? 60 : 10,
    position: 'absolute',
    margin: 15,
    justifyContent: 'space-around'
  },
});

export default Menu;