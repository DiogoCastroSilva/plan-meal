// React
import React from 'react';
// React Native
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Platform,
    TouchableOpacity
} from 'react-native';

// Dummy Data
import { CATEGORIES } from '../../data/dummy-data';
import Colors from '../../constants/styles/Colors';

// Component
const Categories = ({ navigation }) => {

    // Item Interface
    const renderGridItem = (item) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate({ routeName: 'Category'})}>
                <View>
                    <Text>{item.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    // Component View
    return (<FlatList
                data={CATEGORIES}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={renderGridItem}
            />);
};

Categories.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
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