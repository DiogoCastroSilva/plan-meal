// React
import React from 'react';
import { Platform } from 'react-native';
// React Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Expo
import { Ionicons } from '@expo/vector-icons';

// Screens
import Categories from '../screens/Categories/Categories';
import Category from '../screens/Categories/Category/Category';
import MealDetail from '../screens/MealDetail/MealDetail';
import Favorites from '../screens/Favorites/Favorites';

// Constants
import Colors from '../constants/styles/Colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultStackOptions = {
    headerStyle: { 
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: Categories,
            navigationOptions: {
                headerTitle: 'Meal Categories',
            }
        },
        Category: {
            screen: Category,
        },
        MealsDetails: MealDetail
    },
    {
        defaultNavigationOptions: defaultStackOptions
    }
);

const FavNavigator = createStackNavigator(
    {
    Favorites: Favorites,
    MealsDetails: MealDetail
    },
    {
        defaultNavigationOptions: defaultStackOptions
    }
);

const tabScreenConfig = {
    Meals:
    {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                            name="ios-restaurant"
                            size={25}
                            color={tabInfo.tintColor}
                        />
            },
            tabBarColor: Colors.primary
        }
    },
    Favorites:
    {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                            name="ios-star"
                            size={25}
                            color={tabInfo.tintColor}
                        />
            },
            tabBarColor: Colors.secondary
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.secondary
        }
    }
);

export default createAppContainer(MealsFavTabNavigator);