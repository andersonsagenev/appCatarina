import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const ListItem = () => {
    return (
      <View style={styles.container}>
        <Text>Support Screen</Text>
       
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ListItem;

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
   
  });
