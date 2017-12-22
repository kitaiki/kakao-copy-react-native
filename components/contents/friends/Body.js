import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>body</Text>
            </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});
export default Body;