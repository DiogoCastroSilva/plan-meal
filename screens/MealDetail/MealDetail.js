// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

// Component
const MealDetail = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>MealDetail screen</Text>
            <Button
                title="Go Back to Categories"
                onPress={() => navigation.popToTop()}
            />
        </View>
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