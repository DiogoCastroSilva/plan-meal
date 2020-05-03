// React
import React from 'react';
// React Native
import {
    StyleSheet
} from 'react-native';

// Components
import MealList from '../../components/MealList/MealList';

import { MEALS } from '../../data/dummy-data';

// Component
const Favorites = ({ navigation }) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList
                listData={favMeals}
                navigation={navigation}
            />;
};

Favorites.navigattionOptions = {
    headerTitle: 'Favourites'
};

// Styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Favorites;