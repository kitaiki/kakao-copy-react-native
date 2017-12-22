import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Chat extends Component {
    static navigationOptions = {
        tabBarLabel: '채팅',
        tabBarIcon: () => (
            <Ionicons name="ios-chatbubbles" size={25} color="black" />
        ) 
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Chat</Text>
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
export default Chat;