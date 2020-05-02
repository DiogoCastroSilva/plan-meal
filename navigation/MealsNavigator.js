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
            // navigationOptions: {
            //     headerStyle: { 
            //         backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
            //     },
            //     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
            // }
        },
        MealsDetails: MealDetail
    },
    {
        defaultNavigationOptions: {
            headerStyle: { 
                backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }
    }
);

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals:
        {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                }
            }
        },
        Favorites:
        {
            screen: Favorites,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.secondary
        }
    }
);

export default createAppContainer(MealsFavTabNavigator);