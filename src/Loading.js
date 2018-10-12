import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Loading({error}) {
    return (
        <View style={styles.container}>
            <Text style={styles.loadingText}>Getting the weather now...</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6AA',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    loadingText: {
        fontSize: 38,
        marginBottom: 24,
    },
    errorText: {
        color: 'red',
        backgroundColor: 'transparent',
        marginBottom: 40
    }
});