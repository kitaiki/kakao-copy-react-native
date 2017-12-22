import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import CheckBox from 'react-native-checkbox';

class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='카카오계정(이메일)'
                    returnKeyType="next"
                    keyboardType="email-address"
                    clearButtonMode="while-editing"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.textInput}
                />
                <TextInput 
                    placeholder='비밀번호'
                    secureTextEntry
                    returnKeyType="go"
                    clearButtonMode="while-editing" 
                    style={styles.textInput}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >로그인</Text>
                </TouchableOpacity>
                <CheckBox 
                    label='실행시 자동 로그인'
                    checkboxStyle={styles.checkboxStyle}
                    labelStyle={styles.checkboxLebelStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    textInput: {
        height: 40, 
        borderWidth: 1, 
        backgroundColor: 'white',
        borderColor: '#ededed',
        padding: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        padding: 10
    },
    buttonText: {
        color: '#847e7e',
        fontSize: 15
    },
    checkboxStyle: {
        borderColor: '#ededed',
        backgroundColor: 'white',
        width: 15,
        height: 15
    },
    checkboxLebelStyle: {
        color: '#adb0b5'
    }
});
export default LoginForm;