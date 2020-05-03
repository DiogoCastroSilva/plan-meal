// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
// Navigation
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// Components
import CustomHeaderButton from '../../components/CustomHeaderButton/CustomHeaderButton';

// Component
const Filters = () => {
    return (
        <View style={styles.screen}>
            <Text>Filter screen</Text>
        </View>
    );
};

Filters.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => navData.navigation.toggleDrawer()} />
                          </HeaderButtons>
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

export default Filters;