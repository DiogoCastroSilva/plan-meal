// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

// Data
import { CATEGORIES, MEALS } from '../../../data/dummy-data';
// Components
import MealItem from '../../../components/MealList/MealItem/MealItem';
import MealList from '../../../components/MealList/MealList';

// Component
const Category = ({ navigation }) => {
    const id = navigation.getParam('id');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(id) >= 0);

    return (
        <MealList
            listData={displayMeals}
            navigation={navigation}
        />
    );
};


Category.navigationOptions = navigationData => {
    const id = navigationData.navigation.getParam('id');
    const category = CATEGORIES.find(cat => cat.id === id);

    return {
        headerTitle: category.title,
        // headerStyle: {
        //     backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        // },
        // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        };
};

// Styles
const styles = StyleSheet.create({
    
});

export default Category;