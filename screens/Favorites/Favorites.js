// React
import React from 'react';
// React Native
import {
    StyleSheet
} from 'react-native';
// Navigation
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
//Redux
import { useSelector } from 'react-redux';

// Components
import MealList from '../../components/MealList/MealList';
import CustomHeaderButton from '../../components/CustomHeaderButton/CustomHeaderButton';


// Component
const Favorites = ({ navigation }) => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);

    return <MealList
                listData={availableMeals}
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