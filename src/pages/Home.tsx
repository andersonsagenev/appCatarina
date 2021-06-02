import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import Colors from '../styles/colors';


import BalancePanel from '../components/BalancePanelMain';
import EntrySummary from '../components/EntrySummary';
import EntryList from '../components/EntryList';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  return (
    <View style={styles.container}>
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    //padding: 10,
  },
});

export default Main;


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });