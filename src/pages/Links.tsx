import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { Platform } from 'react-native';
import StatusBarPage from '../components/StatusBarPage';
import Menu from '../components/Menu';

import ListItem from '../components/ListLinkItem/ListItem';

const LinksScreen = () => {
    return (
      <View style={styles.container}>
           <StatusBarPage
          barStyle="ligth-content"
          backgroundColor="#132742" />

        <Menu />
        <Text style={styles.title}>
            Links Screen 
        </Text>

        <FlatList
        data={[
          1,3,5,6
          
        ]}
        keyExtractor={(item) => String(item.key) }
        renderItem={({item}) => <ListItem data={item} />}
        contentContainerStyle={{paddingBottom: 22}}
        showsVerticalScrollIndicator={false}

        // <ListItem data={item} />
      />

      </View>
    );
};

export default LinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#132742'
  },
  title: {
    marginTop: Platform.OS === "ios" ? 35+'%' : 20+'%',
    marginLeft: 20,
    fontSize: 33,
    fontWeight: 'bold',
    color: '#FFF'
  },
  links: {

  }
});
