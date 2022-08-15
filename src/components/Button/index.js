import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function Button({ 
  title, 
  onPress, 
  backgroundColor, 
  borderColor,
  borderRadius,  
  fontColor,
  padding,
  fontSize,
  
}) {
  return ( 
      <TouchableOpacity
          activeOpacity={0.8}
          style={{  
              borderRadius: borderRadius, 
              borderColor: borderColor, 
              backgroundColor: backgroundColor, 
              borderWidth: 2,
              alignItems:'center', 
              justifyContent: 'center',
              padding: padding 
          }}
          onPress={onPress}>
          <Text 
            	style={{
                color: fontColor, 
                fontSize: fontSize, 
                fontWeight:'900', 
                fontFamily:'sans-serif'}}>
            {title}</Text>
       </TouchableOpacity>
  )
}