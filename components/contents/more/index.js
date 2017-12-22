import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class More extends Component {
    static navigationOptions = {
        tabBarLabel: '더보기',
        tabBarIcon: () => (
            <Ionicons name="ios-more" size={25} color="black" />
        ) 
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>More</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default More;