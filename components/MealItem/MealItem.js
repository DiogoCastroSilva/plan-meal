// React
import React from 'react';
// React Native
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

// Component
const MealItem = ({
    image,
    title,
    duration,
    complexity,
    affordability,
    onSelect
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSelect}>
                <View>
                    <View style={{ ...styles.row, ...styles.header }}>
                        <ImageBackground style={styles.img} source={{ uri: image}}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.row, ...styles.detail }}>
                        <Text>{duration}</Text>
                        <Text>{complexity}</Text>
                        <Text>{affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        height: '85%'
    },
    img: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    detail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default MealItem;