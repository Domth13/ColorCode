import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Svg, { Circle, Ellipse } from 'react-native-svg';

import { useStateValue } from '../../hooks/useState';




function SvgIcon ({
    color='',
    size,
}) {
    const [ {darkMode}, dispatch ] = useStateValue()

    const defaultColor = color === '' ? '#bfbfbf' : color

    return (
        <View>
            <Svg height={size} width={size} viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill={defaultColor}
                />
                <Ellipse
                    style={{
                        fill: "#f9f9f9",
                        strokeWidth: 0.21,
                        filter: "url(#a)",
                    }}
                    cx={65}
                    cy={35}
                    rx={8}
                    ry={6}
                    />
            </Svg>   
        </View>
    )
}

export default function ColorIcon ({
    color, 
    onPress, 
    size=40, 
    padding=5, 
    disabled=false }) {
    return (  
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ padding: padding}}
            onPress={onPress}
            disabled={disabled}
        >   
            <SvgIcon color={color} size={size}  />   
        </TouchableOpacity>
    )
}