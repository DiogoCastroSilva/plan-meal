// React
import React from 'react';
// React Native
import { StyleSheet, View, Text } from 'react-native';

// Component
const Category = () => {
    return (
        <View style={styles.screen}>
            <Text>Category screen</Text>
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

export default Category;