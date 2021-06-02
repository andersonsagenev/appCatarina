import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem/EntryListItem';
import Container from '../components/Container';
import {getEntries} from '../services/Entries';

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
    //  setEntries(data);
    }

    loadEntries();
   
  }, []);

  return (
    <Container
    title="Últimos Lançamentos"
    actionLabelText="Últimos 7 dias"
    actionButtonText="Ver mais"
    onPressActionButton={() => {}}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermercado Isadora: $190'},
          {key: 'Posto Ipiranga: $190'},
        ]}
        renderItem={({item}) => <Text style={styles.entry}>- {item.key}</Text>}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  entry: {
      
  }
});

export default EntryList;
