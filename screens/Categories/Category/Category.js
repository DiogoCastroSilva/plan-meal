// React
import React from 'react';
// React Native
import {
    StyleSheet, View
} from 'react-native';
// Redux
import { useSelector } from 'react-redux';

// Data
import { CATEGORIES } from '../../../data/dummy-data';
// Components
import MealList from '../../../components/MealList/MealList';
import CustomText from '../../../components/CustomText/CustomText';

// Component
const Category = ({ navigation }) => {
    const id = navigation.getParam('id');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(id) >= 0);

    if (displayMeals.length === 0) {
        return (
            <View style={styles.content}>
                <CustomText>No meals found check your filters?</CustomText>
            </View>
        );
    }
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Category;