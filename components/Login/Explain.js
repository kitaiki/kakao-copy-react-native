import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Hyperlink from 'react-native-hyperlink'

class Explain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>모바일에서 카카오계정을 바로 만들거나 확인하실 수 있습니다.</Text>
                <Text>카카오계정 안내</Text>
                <Text>비밀번호를 잊어버리셨나요?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: '#dedede',
        borderTopWidth: 1
    }
});

export default Explain;