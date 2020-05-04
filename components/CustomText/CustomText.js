import React from 'react';
import { StyleSheet ,Text } from 'react-native';

const CustomText = ({ children }) => {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    }
});

export default CustomText;