import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BalanceLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>$2.102,45</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 36,
    color: Colors.white

  },
});

export default BalanceLabel;