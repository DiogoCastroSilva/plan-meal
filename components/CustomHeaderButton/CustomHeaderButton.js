import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Colors from '../../constants/styles/Colors';

const CustomHeaderButton = () => {
    return <HeaderButton
                IconComponent={Ionicons}
                iconSize={23}
                color={Platform.OS === 'android' ? 'white' : Colors.primary}
            />;
};

export default CustomHeaderButton;