import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import BalanceLabel from './BalancePanel/BalanceLabel';
import BalanceChart from './BalancePanel/BalanceChart';

import Colors from '../styles/colors';
import { LinearGradient }  from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const BalancePanelMain = () => {
  const saldo = "2.065,12"
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <LinearGradient 
     colors={[Colors.violet, Colors.blue]}
     style={styles.panel}>
      <BalanceLabel />
      <BalanceChart />
      {/* <Button
          title="Adicionar"
           onPress={() => navigation.navigate('NewEntry')}
        /> */}
    </LinearGradient>
    <TouchableOpacity style={styles.button}>
        <Icon name="plus" color="#FFF" size={30}/>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 10,
  },
  panel: {
    // flex: 1,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.green,
    borderRadius: 150,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    elevation: 5,
    
    width: 50,
    height: 50,
    marginTop: -25,
    marginRight: 10

  }
});

export default BalancePanelMain;
