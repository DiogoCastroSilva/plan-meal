// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/CustomHeaderButton/CustomHeaderButton';

// Component
const MealDetail = ({ navigation }) => {
    const id = navigation.getParam('id');
    const meal = MEALS.find(meal => meal.id === id);
    return (
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
            <Button
                title="Go Back to Categories"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};

// Header configuration
MealDetail.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('id');
    const meal = MEALS.find(meal => meal.id === id);

    return {
        headerTitle: meal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Favorite' iconName='ios-star' />
            </HeaderButtons>
        )
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

export default MealDetail;