import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Store extends Component {

    render() {
        return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>
                Thank You
            </Text>
            <Text style={{fontSize: 18, position: "absolute", bottom: 20}}>
                Fathul Qorib A | 2019
            </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        alignItems:'center',
        justifyContent :'center'
    }
});   