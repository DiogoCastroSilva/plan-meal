// React
import React from 'react';
// React Native
import {
    StyleSheet,
    FlatList
} from 'react-native';
// Navigation
import { Item, HeaderButtons } from 'react-navigation-header-buttons';

// Dummy Data
import { CATEGORIES } from '../../data/dummy-data';
// Components
import CategoryGrid from '../../components/CategoriesGrid/CategoryGrid';
import CustomHeaderButton from '../../components/CustomHeaderButton/CustomHeaderButton';

// Component
const Categories = ({ navigation }) => {

    // Item Interface
    const renderGridItem = ({item}) => <CategoryGrid
                                            title={item.title}
                                            color={item.color}
                                            onSelect={() => navigation.navigate({
                                                routeName: 'Category',
                                                params: { id: item.id }
                                            })}
                                        />;

    // Component View
    return (<FlatList
                data={CATEGORIES}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={renderGridItem}
            />);
};

Categories.navigationOptions = navData => {
    return { 
        headerTitle: 'Meal Categories',
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
    },
    item: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default Categories;