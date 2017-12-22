import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/kakaotalk-icon2.png')}
                style={{width: 150, height: 150}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'  
    }
});

export default Logo;



