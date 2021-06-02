import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../styles/colors';

const Container = ({title, actionLabelText, actionButtonText, children}: any) => {
  return (
    <View style={styles.container}>
         <Text style={styles.title}>{ title }</Text>
      {children}
      <View style={styles.actionContainer}>
        <Text style={styles.actionLabel}>{ actionLabelText }</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="filter-outline" style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>{actionButtonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.asphalt,
      borderRadius: 5,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      margin: 5,
      padding: 8,
    },
    title: {
      fontSize: 12,
      color: Colors.white,
      marginBottom: 5,
    },
    actionContainer: {
      flexDirection: 'row',
    },
    actionLabel: {
      flex: 1,
      fontSize: 12,
      color: Colors.white,
    },
    actionButton: {
      flexDirection: 'row',
    },
    actionButtonIcon: {
      color: Colors.white,
      marginTop: 3,
      marginRight: 2,
    },
    actionButtonText: {
      fontSize: 12,
      color: Colors.white,
    },
  });

export default Container;
