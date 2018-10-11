import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Loading from "./src/Loading";

export default class App extends Component {
    state = {
        isLoaded: false
    };

    render() {
        const {isLoaded} = this.state.isLoaded;

        return (
            <View style={styles.container}>
                {isLoaded ? null : <Loading/>}
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