import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class Header extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.edit}>
                    <Text style={styles.txt}>관리</Text>
                </View>
                <View style={styles.friends}>
                    <Text style={styles.txt}>친구 111</Text>
                </View>
                <View style={styles.manage}>
                    <FontAwesome name="gear" size={25} color="black" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20
    },
    edit: {
        flex: 1,
        alignItems: 'flex-start'
    },
    friends: {
        flex: 1,
        alignItems: 'center'
    },
    manage: {
        flex: 1,
        alignItems: 'flex-end'
    },
    txt: {
        fontSize: 20
    }
});

export default Header;