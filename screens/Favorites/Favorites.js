// React
import React from 'react';
// React Native
import {
    StyleSheet
} from 'react-native';
// Navigation
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Components
import MealList from '../../components/MealList/MealList';
import CustomHeaderButton from '../../components/CustomHeaderButton/CustomHeaderButton';

import { MEALS } from '../../data/dummy-data';

// Component
const Favorites = ({ navigation }) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList
                listData={favMeals}
                navigation={navigation}
            />;
};

Favorites.navigationOptions = navData => {
    return {
        headerTitle: 'Favourites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => navData.navigation.toggleDrawer()} />
                          </HeaderButtons>
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

export default Favorites;