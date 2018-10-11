import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons";

export default class Weather extends Component {

    render() {
        return (
            <LinearGradient colors={[this.props.colors[0], this.props.colors[1]]} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={120} name="ios-rainy"/>
                    <Text style={styles.temperature}>35°</Text>
                </View>

                <View style={styles.lower}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.subTitle}>subTitle</Text>

                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    temperature: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: 'transparent',
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subTitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    },
});