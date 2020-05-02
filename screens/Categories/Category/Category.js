// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

// Data
import { CATEGORIES, MEALS } from '../../../data/dummy-data';
// Components
import MealItem from '../../../components/MealItem/MealItem';

// Component
const Category = ({ navigation }) => {
    const id = navigation.getParam('id');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(id) >= 0);

    const renderMealItem = ({item}) => <MealItem
                                            title={item.title}
                                            image={item.imageUrl}
                                            duration={item.duration}
                                            complexity={item.complexity.toUpperCase()}
                                            affordability={item.affordability.toUpperCase()}
                                            onSelect={() => {
                                                navigation.navigate('MealsDetails', { id: item.id });
                                            }} />;

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default Category;