import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../screens/Categories/Categories';
import Category from '../screens/Categories/Category/Category';
import MealDetail from '../screens/MealDetail/MealDetail';
import { createAppContainer } from 'react-navigation';

const MealsNavigator = createStackNavigator({
    Categories: Categories,
    Category: {
        screen: Category
    },
    MealsDetails: MealDetail
});

export default createAppContainer(MealsNavigator);