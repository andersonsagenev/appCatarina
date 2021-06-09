import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  Swipeable  from 'react-native-gesture-handler/Swipeable'



const ListItem = ({ data, selectedItem, deleteItem } : any) => {

function RigthActions(){
  return (
    <TouchableOpacity style={styles.ButtonTrash}
                      onPress={ () => deleteItem(data.id) }>
       <Feather name="trash"
                color="#FFF"
                size={24} />
    </TouchableOpacity>
  )
}


    return (
      <View>
        <Swipeable renderRightActions={ RigthActions }>
         <TouchableOpacity style={styles.containerButton}
         activeOpacity={0.9}
          onPress={ () => selectedItem(data)}
        >
           <Feather name="link"
                    color="#FFF"
                    size={24} />
          <Text style={styles.link} numberOfLines={1}>{ data.long_url }</Text>

        </TouchableOpacity>
        </Swipeable>
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
    ButtonTrash: {
      width: '15%',
      backgroundColor: '#FF5555',
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 7
    }
   
  });
