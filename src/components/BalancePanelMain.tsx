import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalanceLabel from './BalancePanel/BalanceLabel';
import BalanceChart from './BalancePanel/BalanceChart';

const BalancePanelMain = () => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <BalanceChart />
      <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  }
});

export default BalancePanelMain;
