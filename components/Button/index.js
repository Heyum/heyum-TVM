import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

function Button({iconName, onPress}){
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={40} color="grey" />
        </TouchableOpacity>    
    )
}

Button.propTypes = { 
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;






