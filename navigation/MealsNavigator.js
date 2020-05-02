// React
import { Platform } from 'react-native';
// React Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import Categories from '../screens/Categories/Categories';
import Category from '../screens/Categories/Category/Category';
import MealDetail from '../screens/MealDetail/MealDetail';

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

export default createAppContainer(MealsNavigator);