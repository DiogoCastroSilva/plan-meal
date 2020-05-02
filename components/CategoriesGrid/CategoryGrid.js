// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

// Component
const CategoryGrid = ({ title, color, onSelect }) => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 22) {
        TouchableComponent = TouchableNativeFeedback;
    }
    // Component View
    return (
        <View style={styles.item}>
            <TouchableComponent
                style={{ flex: 1 }}
                // or navigation.navigate('Category', { })
                onPress={onSelect}
            >
                <View style={{ ...styles.container, backgroundColor: color }}>
                    <Text
                        numberOfLines={2}
                        style={styles.title}
                    >
                        {title}
                    </Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21
            ? 'hidden'
            : 'visible',
        elevation: 5
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGrid;