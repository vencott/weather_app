import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Loading from "./src/Loading";
import Weather from "./src/Weather";

export default class App extends Component {
    state = {
        isLoaded: true
    };

    render() {
        const {isLoaded} = this.state;

        return (
            <View style={styles.container}>
                {isLoaded ? <Weather colors={["#00C6FB", "#005BEA"]}/> : <Loading/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});