import React from 'react';
import {View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import EntryLabel from '../components/BalancePanel/BalanceLabel';
import EntrySummary from '../components/EntrySummary';
import EntryList from '../components/EntryList';

const Report = () => {
  return (
    <View>
      <EntryLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
      <View>
      <Button
          title="Salvar"
          onPress={() => alert('Button Clicked!')}
        />
      <Button
          title="Fechar"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    </View>
  );
};

export default Report;
