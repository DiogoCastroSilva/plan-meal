// React
import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
// React Native
import { Platform } from 'react-native';
// Expo
import { Ionicons } from '@expo/vector-icons';

// Styles
import Colors from '../../constants/styles/Colors';

const CustomHeaderButton = (props) => {
    return <HeaderButton
                {...props}
                IconComponent={Ionicons}
                iconSize={23}
                color={Platform.OS === 'android' ? 'white' : Colors.primary}
            />;
};

export default CustomHeaderButton;