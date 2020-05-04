// React
import React from 'react';
// React Native
import {
    StyleSheet
} from 'react-native';
// Redux
import { useSelector } from 'react-redux';

// Data
import { CATEGORIES } from '../../../data/dummy-data';
// Components
import MealList from '../../../components/MealList/MealList';

// Component
const Category = ({ navigation }) => {
    const id = navigation.getParam('id');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(id) >= 0);

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