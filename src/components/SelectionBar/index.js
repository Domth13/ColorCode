import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import { colors } from "../../config/Theme";


export default function SelectionBar({ 
    onPress, 
    options, 
    bgColor, 
    spacing, 
    color,
    fontSize,
    borderRadius,
    borderColor,
    defaultState,
    selectionColor  

}) {

    const [ currentSelection, setCurrentSelection ] = useState(defaultState)
   
    function getSelection(option) {
            setCurrentSelection(option)
            onPress(option)
    }
    
    function RenderOption({option, onPress}) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => getSelection(option)} 
                style={{
                    backgroundColor: currentSelection === option ? selectionColor : '',
                    padding: spacing,
                    borderRadius: borderRadius,
                }}>
                
                <Text style={{ 
                    fontSize: fontSize,
                    fontWeight:'bold',
                    color: currentSelection === option ? '#fff' : color
                    
                    }}>
                    {option}
                </Text> 
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            backgroundColor: bgColor,
            flexDirection:'row',
            borderRadius: borderRadius,
            justifyContent:'center',
            borderWidth: 2,
            borderColor: borderColor

        }}>
            {options.map(
                option =>  <RenderOption key={option} option={option} /> 
                
                )}
        </View>

        
    )
}