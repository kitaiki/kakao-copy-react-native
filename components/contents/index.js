import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Friends from './friends';
import Chat from './chat';
import Channel from  './channel';
import More from './more';

// class Contents extends Component {
//     render() {
//         return (
//             <Friends/>
//         );
//     }
// }

const Contents = TabNavigator({
    친구: {
        screen: Friends
    },
    채팅:  {
        screen: Chat
    },
    채널:  {
        screen: Channel
    },
    더보기:  {
        screen: More
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        activeBackgroundColor: '#ededed',
        showIcon: true,
        labelStyle: {
            fontSize: 15,
            padding: 0
        }
    }
});

export default Contents;