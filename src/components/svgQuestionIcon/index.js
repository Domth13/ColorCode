import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Text, Ellipse } from 'react-native-svg';
import { spacing } from "../../config/Theme";

import { colorArray } from "../../config/GameColors";

function SvgQuestionIcon({
    color='black',
    size=40,
}) {
    return(
        <View>
            <Svg height={size} width={size} viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill={color}
                />
                <Ellipse
                    style={{
                        fill: "#f9f9f9",
                        strokeWidth: 0.21,
                        filter: "url(#a)",
                    }}
                    cx={77}
                    cy={25}
                    rx={6}
                    ry={4}
                    />
                <Text
                    x='50'
                    y='77'
                    fontSize='80'
                    textAnchor="middle"
                    fill={'#fff'}
                    fontWeight='bold'
                >?</Text>
                
            </Svg>   
        </View>
    )
}

export default function QuestionIcon({ codeLength }) {

    function randomColor(arr) {
        const colorObject = arr[Math.floor(Math.random()*arr.length)]
        const color = colorObject.color

        return color
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <SvgQuestionIcon color={randomColor(colorArray)}/>
            </View>
            <View style={styles.iconContainer}>
                <SvgQuestionIcon color={randomColor(colorArray)} />
            </View>
            <View style={styles.iconContainer}>
                <SvgQuestionIcon color={randomColor(colorArray)} />
            </View>
            {codeLength.quantity > 3 ?
            <View style={styles.iconContainer}>
                <SvgQuestionIcon color={randomColor(colorArray)} />
            </View> : null}
            {codeLength.quantity > 4 ?
            <View style={styles.iconContainer}>
                <SvgQuestionIcon color={randomColor(colorArray)} />
            </View> : null}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center'

    },
    iconContainer: {
        padding: spacing.small

    }
})