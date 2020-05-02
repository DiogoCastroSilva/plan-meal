// React
import React from 'react';
// React Native
import { StyleSheet, View, Text } from 'react-native';

// Component
const Favorite = () => {
    return (
        <View style={styles.screen}>
            <Text>Favorite screen</Text>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Favorite;