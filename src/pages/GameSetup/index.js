import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { 
    spacing, 
    colors, 
    fontSizes,
    borderRadii,

 } from '../../config/Theme';
import { useNavigation } from '@react-navigation/native';

import { codeLengthValues, darkModeValues, resultOrderValues  } from '../../config/Settings';
import SelectionBar from '../../components/SelectionBar';
import Button from '../../components/Button';
import { colorArray } from '../../config/GameColors';
import ColorText from '../../components/ColorText';
import { useStateValue } from '../../hooks/useState';
import { createCode } from '../../gameFunctions/createRandomCode';
import { cleanArray } from '../../config/gameArrays/cleanArrays';
import { blankGameArray, blankResultArray, blankArray } from '../../config/GameColors';

export default function GameStart() {
    const navigation = useNavigation()
    const [ {darkMode}, dispatchDM ] = useStateValue()
    const [ {resultOrder}, dispatchRO ] = useStateValue()
    const [{codeLength}, dispatchCL] = useStateValue()
    const [ {colorCode}, dispatchCC] = useStateValue()
    const randomColorCode = createCode(colorArray, codeLength.quantity)
    console.log(colorCode)
    
    
    function handleStartGame(code) {
        dispatchCC({
            type: 'SETCOLORCODE',
            newColorCode: { array: code}
        })
        const cleanGameArray = cleanArray(blankGameArray) 
        const cleanResultArray = cleanArray(blankResultArray)
        const cleanblankArray = cleanArray(blankArray)
        navigation.navigate('GamePage')  
    }

    function getSelectedDarkMode(value) { 

        value === darkModeValues.dark ?
        
            dispatchDM({
                type:'SETDARKMODE',
                newDarkMode: { bool: true}
            }) : 
            
            dispatchDM({
                type:'SETDARKMODE',
                newDarkMode: { bool: false}
            }) 

        
        console.log(value)
    }
    function getSelectedResultOrder(value) {

        value === resultOrderValues.ordered ?
            dispatchRO({
                type:'SETRESULTORDER',
                newResultOrder: { bool: true}
            }) : 
            
            dispatchRO({
                type:'SETRESULTORDER',
                newResultOrder: { bool: false}
            })
        
        console.log(value)
    }

    function getSelectedCodeLength(value) {
        dispatchCL({
            type:'SETCODELENGTH',
            newCodeLength: { quantity: value}
        })
        console.log(value)
    }

    return (
        <View style={[styles.container, darkMode.bool ? {backgroundColor: colors.primaryDark} : null ]}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    <ColorText text={'__Color_Code__'}/>
                </Text>
            </View>
            <View style={styles.selectionBarContainer}>
                <View style={styles.selectionBarWrapper}>
                    <Text style={styles.textSelectionBar}>
                        <ColorText text={'Dark Mode'}/>
                    </Text>
                    <SelectionBar 
                        options={[
                            darkModeValues.dark,
                            darkModeValues.normal
                        ]}
                        defaultState={darkModeValues.normal}
                        spacing={spacing.medium}
                        fontSize={fontSizes.small}
                        borderRadius={borderRadii.medium}
                        bgColor={colors.primary}
                        onPress={(val) => getSelectedDarkMode(val)}
                        borderColor={darkMode.bool ? colors.primary : colors.secondary}
                        selectionColor={darkMode.bool ? colors.teal : colors.indigo}
                        color={colors.secondary}
                    />
                </View>
                <View style={styles.selectionBarWrapper}>
                    <Text style={styles.textSelectionBar}>
                        <ColorText text={'Result Order'}/> 
                    </Text>
                    <SelectionBar 
                        options={[
                            resultOrderValues.ordered, 
                            resultOrderValues.shuffled
                        ]}
                        defaultState={resultOrderValues.shuffled}
                        spacing={spacing.medium}
                        fontSize={fontSizes.small}
                        borderRadius={borderRadii.medium}
                        bgColor={colors.primary}
                        onPress={(val) => getSelectedResultOrder(val)} 
                        borderColor={darkMode.bool ? colors.primary : colors.secondary}
                        selectionColor={darkMode.bool ? colors.purple : colors.orange}
                        color={colors.secondary}
                    />
                </View>
                <View style={styles.selectionBarWrapper}>
                    <Text style={styles.textSelectionBar}>
                        <ColorText text={'Code Length'}/>
                    </Text>
                    <SelectionBar 
                        options={[
                            codeLengthValues.easy, 
                            codeLengthValues.normal, 
                            codeLengthValues.difficult
                        ]}
                        defaultState={codeLengthValues.normal}
                        spacing={spacing.medium}
                        fontSize={fontSizes.small}
                        borderRadius={borderRadii.medium}
                        bgColor={colors.primary}
                        onPress={(val) => getSelectedCodeLength(val)}
                        borderColor={darkMode.bool ? colors.primary : colors.secondary}
                        selectionColor={darkMode.bool ? colors.teal : colors.indigo}
                        color={colors.secondary}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button 
                        title={'Start Game'}
                        borderRadius={borderRadii.medium} 
                        borderColor={darkMode.bool ? colors.teal : colors.indigo}
                        padding={spacing.medium}
                        fontSize={fontSizes.medium}
                        onPress={() => handleStartGame(randomColorCode)}
                        backgroundColor={darkMode.bool ? colors.teal : colors.indigo}
                        fontColor={colors.primary}
                        />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button 
                        title={'Highscore'}
                        borderRadius={borderRadii.medium} 
                        borderColor={darkMode.bool ? colors.purple : colors.orange}
                        padding={spacing.medium}
                        fontSize={fontSizes.medium}
                        backgroundColor={darkMode.bool ? colors.purple : colors.orange}
                        fontColor={colors.primary}
                        onPress={() => alert('Available soon!')}
                        />
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.signalWhite
      
    },
    titleContainer: {
        paddingBottom: spacing.xxl,
        justifyContent: 'flex-start',
        paddingTop: spacing.small
    },

    titleText: {
        fontSize: fontSizes.xl,
        textAlign:'center',
        fontWeight:'bold'
    },

    selectionBarContainer: {
           
    },
    selectionBarWrapper: {
        padding: spacing.small, 

    },
    textSelectionBar: {
        textAlign:'center',
        fontSize: fontSizes.medium,
        padding: spacing.small,
        color: colors.brownCaramel,
        fontWeight:'bold'
        
    },
    buttonContainer: {
        width: '80%',
        padding: spacing.small,
        paddingTop: spacing.xxl
    },

    buttonWrapper: {
        paddingVertical: spacing.small

    }
    
  });