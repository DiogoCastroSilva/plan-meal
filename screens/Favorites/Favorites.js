// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View
} from 'react-native';
// Navigation
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
//Redux
import { useSelector } from 'react-redux';

// Components
import MealList from '../../components/MealList/MealList';
import CustomHeaderButton from '../../components/CustomHeaderButton/CustomHeaderButton';
import CustomText from '../../components/CustomText/CustomText';


// Component
const Favorites = ({ navigation }) => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);

    if (availableMeals.length === 0 || !availableMeals) {
        return (
            <View styles={styles.noMealsContent}>
                <CustomText>No favorite meals found. Start adding some!</CustomText>
            </View>
        );
    }
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
    noMealsContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Favorites;