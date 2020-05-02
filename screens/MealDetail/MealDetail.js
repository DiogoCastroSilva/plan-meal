// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// Component
const MealDetail = ({ navigation }) => {
    return (
        <FlatList numColumns={2} />
    );
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