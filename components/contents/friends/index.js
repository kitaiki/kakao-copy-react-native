import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './Header';
import Body from './Body';

class Friends extends Component {
    static navigationOptions = {
        tabBarLabel: '친구',
        tabBarIcon: () => (
            <MaterialCommunityIcons name="human-greeting" size={25} color="black" />
        ) 
    }
    render() {
        return (
             <View>
                 <Header/>
                 <Body />
            </View>
        );
    }
}



export default Friends;
