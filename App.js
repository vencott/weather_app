import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Loading from "./src/Loading";
import Weather from "./src/Weather";

export default class App extends Component {
    state = {
        isLoaded: false
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    isLoaded: true
                })
            },
            error => {
                console.log(error);
            })
    }

    render() {
        const {isLoaded} = this.state;

        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
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