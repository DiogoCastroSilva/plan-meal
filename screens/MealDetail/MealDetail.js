// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
// Navigation
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// Components
import CustomHeaderButton from '../../components/CustomHeaderButton/CustomHeaderButton';
import CustomText from '../../components/CustomText/CustomText';

import { MEALS } from '../../data/dummy-data';

const ListItem = ({children, key}) => {
    return (
        <View key={key} style={styles.listItem}>
            <CustomText>{children}</CustomText>
        </View>
    );
};
// Component
const MealDetail = ({ navigation }) => {
    const id = navigation.getParam('id');
    const meal = MEALS.find(meal => meal.id === id);

    return (
        <ScrollView>
            <Image source={{uri: meal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <CustomText>{meal.duration}</CustomText>
                <CustomText>{meal.complexity}</CustomText>
                <CustomText>{meal.affordability}</CustomText>
            </View>
            <View>
                <Text style={styles.title}>Ingredients</Text>
                {meal.ingredients.map(ingredient => (
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                ))}
                <Text style={styles.title}>Steps</Text>
                {meal.steps.map(step => (
                    <ListItem key={step}>{step}</ListItem>
                ))}
            </View>
        </ScrollView>
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
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetail;