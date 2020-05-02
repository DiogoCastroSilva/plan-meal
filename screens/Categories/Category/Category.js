// React
import React from 'react';
// React Native
import { StyleSheet, View, Text, Button } from 'react-native';

// Component
const Category = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Category screen</Text>
            <Button
                title="Go To Details"
                onPress={() => navigation.navigate('MealsDetails')}
            />

            <Button 
                title="Go Back"
                // or navigation.pop()
                onPress={() => navigation.goBack()}
            />
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