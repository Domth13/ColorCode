import React from "react";
import { Text, View, StyleSheet} from "react-native";
import ColorIcon from "../ColorIcon";
import uuid from 'react-native-uuid';
import { colors } from "../../config/Theme";


const ICONSIZE = 26

export default function GameBoard({
    colorArray, 
    codeLength, 
    resultArray,
    colorIconBgColor

}) {
    
    return (
        <View>
            <View style={styles.container}>
                {colorArray.map(element => 
                    <View key={uuid.v4()} style={styles.iconContainer}>
                        <View style={[styles.historyIconContainer, { backgroundColor: colorIconBgColor }]}>
                            <ColorIcon 
                                color={element[0].color} 
                                size={ICONSIZE}/>
                            <ColorIcon 
                                color={element[1].color} 
                                size={ICONSIZE}/>
                            <ColorIcon 
                                color={element[2].color} 
                                size={ICONSIZE}/>
                            {codeLength.quantity > 3 ?
                            <ColorIcon 
                                color={element[3].color} 
                                size={ICONSIZE}/> : null}
                                {codeLength.quantity > 4 ?
                            <ColorIcon 
                                color={element[4].color} 
                                size={ICONSIZE}/> : null}
                        </View>  
                        <View style={styles.resultIconContainer}>
                            <ColorIcon 
                                color={resultArray[colorArray.indexOf(element)][0].color} 
                                size={16}/>
                            <ColorIcon 
                                color={resultArray[colorArray.indexOf(element)][1].color} 
                                size={16}/>
                            <ColorIcon 
                                color={resultArray[colorArray.indexOf(element)][2].color}
                                size={16}/>
                            {codeLength.quantity > 3 ?
                            <ColorIcon 
                                color={resultArray[colorArray.indexOf(element)][3].color} 
                                size={16}/> : null}
                                {codeLength.quantity > 4 ?
                            <ColorIcon 
                                color={resultArray[colorArray.indexOf(element)][4].color} 
                                size={16}/> : null}
                        </View>
                    </View>
                )}
            </View>     
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        
    },

    iconContainer: {
        flexDirection:'row', 
       
        marginVertical: 1.5, 
        borderRadius: 19,
        justifyContent: 'center'

    },

    historyIconContainer: {
        flexDirection:'row',
        borderRadius: 19,
        paddingLeft: 2
    },

    resultIconContainer: {
        flexDirection:'row',
        alignItems:'center',
       
        paddingLeft: 25,
    },

    resultContainer: {
          
    }
    
  });
