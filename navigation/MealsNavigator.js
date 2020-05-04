// React
import React from 'react';
// React Native
import {
    Platform,
    Text
} from 'react-native';
// React Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Expo
import { Ionicons } from '@expo/vector-icons';

// Screens
import Categories from '../screens/Categories/Categories';
import Category from '../screens/Categories/Category/Category';
import MealDetail from '../screens/MealDetail/MealDetail';
import Favorites from '../screens/Favorites/Favorites';
import Filters from '../screens/Filters/Filters';

// Constants
import Colors from '../constants/styles/Colors';

// Style options for stack navigation
const defaultStackOptions = {
    headerStyle: { 
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
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

// To add a Header to Filter page
const FilterNavigator = createStackNavigator(
    {
        Filters: Filters
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
            tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
                : 'Meals'
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
            tabBarColor: Colors.secondary,
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
                : 'Favorites'
        }
    }
};

// Configuration fot Bottom Tab Navigation
const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primary
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.secondary
        }
    }
);

const mainNavigator = createDrawerNavigator(
    {
        MealsFav: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: FilterNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.secondary,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(mainNavigator);