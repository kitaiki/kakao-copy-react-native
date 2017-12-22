import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Channel extends Component {
    static navigationOptions = {
        tabBarLabel: '채널',
        tabBarIcon: () => (
            <MaterialCommunityIcons name="glassdoor" size={25} color="black" />
        ) 
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Channel</Text>
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
export default Channel;