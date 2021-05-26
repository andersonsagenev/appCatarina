import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import BalancePanel from '../components/BalancePanelMain';
import EntrySummary from '../components/EntrySummary';
import EntryList from '../components/EntryList';

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
    padding: 10,
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