// React
import React from 'react';
// React Native
import { StyleSheet, View, Text, Button } from 'react-native';

// Data
import { CATEGORIES } from '../../../data/dummy-data';

// Component
const Category = ({ navigation }) => {
    const id = navigation.getParam('id');
    const category = CATEGORIES.find(cat => cat.id === id);

    return (
        <View style={styles.screen}>
            <Text>Category screen</Text>
            <Text>{category.title}</Text>
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


Category.navigationOptions = navigationData => {
    const id = navigation.getParam('id');
    const category = CATEGORIES.find(cat => cat.id === id);

    return {
        headerTitle: category.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        };
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