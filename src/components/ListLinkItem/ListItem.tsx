import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';



const ListItem = () => {
    return (
      <View>
      
        <TouchableOpacity style={styles.containerButton}
        activeOpacity={0.9}
          onPress={() => alert('Button Clicked!')}
        >
           <Feather name="link"
                    color="#FFF"
                    size={24} />
          <Text style={styles.link} numberOfLines={1}>https://youtube.com</Text>

        </TouchableOpacity>

      </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
   
    containerButton: {
      flexDirection: 'row',
      backgroundColor: 'rgba(255,255,255, 0.21)',
      borderRadius: 7,
      padding: 12,
      marginVertical: 7,
      marginHorizontal: 7
    },
    link: {
      color: '#FFF',
      fontSize: 18,
      paddingLeft: 10,
      paddingRight: 20,
    },
   
  });
