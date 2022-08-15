import React from "react";
import { View, Text } from "react-native";
import uuid from "react-native-uuid";

import { colorArray } from "../../config/GameColors";

export default function ColorText({ 
    text,
    fontSize,
    fontFamily,
    fontWeight,

 }) {
   
    function createTextArray(text) {
        const chars = text.split('')
        const prevIndex = [0]

        const textArray = chars.map(char => {
            const name = char
            const start = text.indexOf(char, prevIndex[prevIndex.length -1])
            const end = text.indexOf(char, start) + char.length
            const prevIndexCount = prevIndex.push(end)
            const id = uuid.v4()
            const colorObject = colorArray[Math.floor(Math.random() * colorArray.length)]
            const color = colorObject.color

            return {name, start, end, id, color}
        })
    
        return textArray
    }

    function RenderSubstring( textData, string ) {

        const substring = textData.map(
          text => <Text key={text.id}>
                    <Text 
                        style={{ 
                            color: text.color,
                            //backgroundColor: text.color, 
                            fontSize: fontSize,
                            fontFamily: fontFamily,
                            fontWeight: fontWeight
                            
                            }}>
                        {string.substring(text.start, text.end)}</Text>
                </Text>)
    
        return substring  
      }

      const textArray = createTextArray(text)
      const colorText = RenderSubstring(textArray, text)

      return colorText
}