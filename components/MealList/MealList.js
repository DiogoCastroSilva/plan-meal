// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

// Components
import MealItem from './MealItem/MealItem';
import { useSelector } from 'react-redux';

// Component
const MealList = ({
    listData,
    navigation
}) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = ({item}) => <MealItem
                                            key={item.id}
                                            title={item.title}
                                            image={item.imageUrl}
                                            duration={item.duration}
                                            complexity={item.complexity.toUpperCase()}
                                            affordability={item.affordability.toUpperCase()}
                                            onSelect={() => {
                                                navigation.navigate('MealsDetails', {
                                                    id: item.id,
                                                    title: item.title,
                                                    isFav: favMeals.some(meal => meal.id === item.id)
                                                });
                                            }}
                                        />;

    return (
        <View style={styles.list}>
            <FlatList
                data={listData}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;