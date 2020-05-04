// React
import React, { useState, useEffect, useCallback } from 'react';
// React Native
import {
    StyleSheet,
    View,
    Text,
    Switch,
    Platform
} from 'react-native';
// Navigation
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// Components
import CustomHeaderButton from '../../components/CustomHeaderButton/CustomHeaderButton';
import Colors from '../../constants/styles/Colors';


const FilterSwitch = ({
    label,
    value,
    onChange
}) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{label}</Text>
            <Switch
                trackColor={{ true: Colors.primary }}
                thumbColor={Platform.OS === 'android'
                    ? Colors.primary
                    : ''
                }
                value={value}
                onValueChange={onChange}
            />
        </View>
    );
};

// Component
const Filters = ({ navigation }) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVeganFree, setIsVeganFree] = useState(false);
    const [isVegetarianFree, setIsVegetarianFree] = useState(false);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vaganFree: isVeganFree,
            vegetarianFree: isVegetarianFree
        };
    }, [isGlutenFree, isLactoseFree, isVeganFree, isVegetarianFree]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-Free"
                value={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-Free"
                value={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                value={isVeganFree}
                onChange={newValue => setIsVeganFree(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                value={isVegetarianFree}
                onChange={newValue => setIsVegetarianFree(newValue)}
            />
        </View>
    );
};

Filters.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={() => {
                        navData.navigation.getParam('save')();
                    }}
                />
            </HeaderButtons>
        )
    };
};

// Styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default Filters;