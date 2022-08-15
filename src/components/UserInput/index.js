import React, {useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { 
    spacing, 
    colors, 
    fontSizes,
    borderRadii,

 } from '../../config/Theme';

import ColorIcon from '../ColorIcon';
import { useStateValue } from '../../hooks/useState';
import Button from '../Button';
import { compareCode } from '../../gameFunctions/compareCodes';
import { blankArray, colorArray} from '../../config/GameColors';
import { timer } from '../../gameFunctions/timer';

export default function UserInput({ codeLength }) {
    const navigation = useNavigation()
    const [ {gameArray}, dispatchGA] = useStateValue()
    const [ {userInput}, dispatchUI] = useStateValue()
    const [ {countAttempts}, dispatchCA] = useStateValue()
    const [ {colorCode}, dispatchCC] = useStateValue()
    const [ {finalResult}, dispatchFR] = useStateValue()
    const [ countSubmit, setCountSubmit ] = useState(gameArray.array.length)
    const [ {resultArray}, dispatchRA] = useStateValue()
    const [ {resultOrder}, dispatchRO] = useStateValue()
    const [ {darkMode}, dispatchDM] = useStateValue()
    
    const userArray = lengthCode(blankArray, codeLength.quantity)
    const [ userData, setUserData ] = useState(userArray)
    const [ colorChoice, setColorChoice ] = useState(colorArray)
    const [ showColorChoice, setShowColorChoice ] = useState(false)
    const [ openIconId, setOpenIconId ] = useState(0)
    const [ userWins, setUserWins ] = useState(false)
    
    function lengthCode (array, codeLength) {
        
        if (codeLength === 3) {
            const newArray = array.slice(0, 3)
            return newArray
            
        } else if (codeLength === 4) {
            const newArray = array.slice(0, 4)
            return newArray
            
        } else {
            const newArray = array
            return newArray      
        }
    
    }

    function checkResult(code, userCode) {
        const result = compareCode(code, userCode, resultOrder)
        const win = checkforWin(result)
        console.log(win)
        setUserWins(win)
        const newArray = resultArray.array
        newArray.splice(countSubmit -1, 1, result)
        dispatchRA({
            type:'SETRESULTARRAY',
            newResultArray: { array: newArray}
        })
        dispatchFR({
            type:'SETFINALRESULT',
            newFinalResult: {bool: win}
        })

        win ? handleQuit() : null  
    }

    function setGlobalData(userInput, count) {
        const newArray = gameArray.array
        newArray.splice(count -1, 1, userInput)
        const attempt = (gameArray.array.length - count +1)
        
        dispatchGA({
            type:'SETGAMEARRAY',
            newGameArray: { array: newArray}
        })
        dispatchUI({
            type:'SETUSERINPUT',
            newUserInput: { array: userInput}
        })
        dispatchCA({
            type:'SETCOUNTATTEMPTS',
            newCountAttempts: { quantity: attempt }
        })

        checkResult(colorCode.array, userInput)
    }


    function handleSubmit(userInput, count) {
        const isReadyToSubmit = checkInput(userData)
        
        if (isReadyToSubmit) {
            setGlobalData(userInput, count)
            setCountSubmit(countSubmit - 1)
            setUserData(userArray)
            
            
        } else { alert('Select all colors!')}
        
    }

    function handleQuit() {
        setCountSubmit(gameArray.array.length)
        setUserData(userArray)

        navigation.navigate('GameEnd')
        
    }

    function checkInput(array) {
        const notBlank = array.every(data => data.color !== '')

        return notBlank
    }

    function checkforWin(array) {
        const win = array.every(data => data.color === 'green')
        return win
    }
    
    function handleColorChoice(color, id) {
        setUserData(userData.map(data => (data.id == id ? {...data, color: color} : data)))
        setShowColorChoice(previous => !previous)
        
    }

    function handleOpenColorChoice(id) {
        setOpenIconId(id)
        setShowColorChoice(previous => !previous)   
    }

    useEffect(() => {
        countAttempts.quantity > 12 ? handleQuit() : null
    },[countAttempts.quantity])


    return (
        <View>
            <View>
                {showColorChoice ?
                    <View style={styles.colorChoiceWrapper}>
                                {colorChoice.map(data => 
                                    <ColorIcon 
                                        key={uuid.v4()} 
                                        color={data.color} 
                                        onPress={() => handleColorChoice(data.color, openIconId)} /> 
                                    )}
                    </View>
                : 
                    <View style={styles.userInputWrapper}>
                        <View style={{ flexDirection:'row' }}>
                            {userData.map(data => 
                                <ColorIcon 
                                    key={uuid.v4()} 
                                    color={data.color} 
                                    onPress={() => handleOpenColorChoice(data.id)} />
                            )} 
                        </View>
                    </View> 
                }
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <Button
                            fontColor={colors.primary}
                            backgroundColor={darkMode.bool ? colors.teal : colors.indigo} 
                            title={'Quit'}
                            borderRadius={borderRadii.medium} 
                            borderColor={darkMode.bool ? colors.primary : colors.indigo}
                            color={colors.primary}
                            padding={spacing.small}
                            fontSize={fontSizes.medium}
                            onPress={() => handleQuit()}
                            />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button 
                            fontColor={colors.primary}
                            backgroundColor={darkMode.bool ? colors.purple : colors.orange}
                            title={'Submit'}
                            borderRadius={borderRadii.medium} 
                            borderColor={darkMode.bool ? colors.primary : colors.orange}
                            color={colors.primary}
                            padding={spacing.small}
                            fontSize={fontSizes.medium}
                            onPress={() => handleSubmit(userData, countSubmit)}
                            />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    colorChoiceWrapper: {
        flexDirection:'row',
        justifyContent:'center', 
        paddingVertical: 5
    },

    userInputWrapper: {
        alignItems:'center', 
        paddingVertical: 5
    }, 

    buttonContainer: {
        padding: spacing.small,
        paddingTop: spacing.small,
        flexDirection:'row'
    },

    buttonWrapper: {
        paddingHorizontal: spacing.small,
        width: '50%'

    }
})