import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import Explain from './Explain';
import Logo from './Logo';

class Login extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Logo />
                <LoginForm navigation={this.props.navigation}/>
                <Explain/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fbe300',
        paddingLeft: 50,
        paddingRight: 50
    }
});


export default Login;
