import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.loadingText}>Getting the weather now...</Text>
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
    }
});