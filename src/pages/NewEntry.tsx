import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import BalanceLabel from '../components/BalancePanel/BalanceLabel';

const NewEntry = () => {
    return (
        <View style={styles.container}>
            <BalanceLabel />

            <View>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <Button
                    title="GPS"
                    onPress={() => alert('Button Clicked!')}
                />
                <Button
                    title="Camera"
                    onPress={() => alert('Button Clicked!')}
                />
            </View>

            <View>
                <Button
                    title="Adicionar"
                    onPress={() => alert('Button Clicked!')}
                />
                <Button
                    title="Cancelar"
                    onPress={() => alert('Button Clicked!')}
                />


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
    },
});

export default NewEntry;
