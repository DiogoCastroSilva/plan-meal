// React
import React from 'react';
// React Native
import { StyleSheet, View, Text, Button } from 'react-native';

// Component
const Categories = ({ navigation }) => {

    // Component View
    return (
        <View style={styles.screen}>
            <Text>Categories screen</Text>
            <Button
                title="Go To Meals"
                onPress={() => navigation.navigate({routeName: 'Category'})}
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

export default Categories;