// React
import React from 'react';
// React Native
import {
    StyleSheet,
    FlatList
} from 'react-native';

// Dummy Data
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGrid from '../../components/CategoriesGrid/CategoryGrid';

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

// Categories.navigationOptions = {
//     headerTitle: 'Meal Categories',
//     headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//     },
//     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
// };

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