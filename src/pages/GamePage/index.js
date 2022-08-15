import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { 
    spacing, 
    colors, 
    fontSizes,
    borderRadii,

} from '../../config/Theme';
import { useNavigation } from '@react-navigation/native';

import GameBoard from '../../components/GameBord';
import UserInput from '../../components/UserInput';
import { useStateValue } from '../../hooks/useState';
import { colorArray } from '../../config/GameColors';
import QuestionIcon from '../../components/svgQuestionIcon';
import { timer } from '../../gameFunctions/timer';

const CODELENGTH = 4

export default function GamePage() {
    const navigation = useNavigation()
    const [ {darkMode}, dispatchDM ] = useStateValue()
    const [ {codeLength}, dispatchCL] = useStateValue()
    const [ {gameArray}, dispatchGA ] = useStateValue()
    const [ {resultArray}, dispatchRA ] = useStateValue()
    const [ {countAttempts}, dispatchCA ] = useStateValue()
    const [ {finalResult}, dispatchFR ] = useStateValue()
    const [ {time}, dispatchT ] = useStateValue()
    

    return (
        <View style={[styles.container, darkMode.bool ? {backgroundColor: colors.primaryDark} : null ]}>
            <View style={styles.header}>
                <View styles={styles.iconContainer}>
                    <View styles={styles.iconWrapper}>
                        <QuestionIcon codeLength={codeLength}/>
                    </View>
                </View>
            </View>
            <View style={[styles.gameBordContainer, darkMode.bool ? {backgroundColor: colors.teal} : null]}>
                <GameBoard 
                    colorArray={gameArray.array}
                    codeLength={codeLength}
                    resultArray={resultArray.array}
                    colorIconBgColor ={darkMode.bool ? colors.primaryDark : colors.primaryDark} 
                    />
            </View>
            
            <View style={[styles.userInputContainer, darkMode.bool ? {backgroundColor: colors.primaryDark} : null]}>
                <UserInput 
                    codeLength={codeLength} 
                    />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      backgroundColor: colors.signalWhite,
      
    },
    header: {
        flexDirection:'row',
        marginBottom: spacing.small,
        marginTop: spacing.medium,
        marginHorizontal: spacing.small,
        justifyContent:'center',
        alignItems:'center',
        
    },

    iconContainer: {

    },

    iconWrapper: {
       
    },

    gameBordContainer: {
        borderColor:colors.secondary,
        backgroundColor: colors.indigo,
        borderRadius: borderRadii.medium,
        padding: spacing.small,
        marginHorizontal: spacing.small,
        alignItems:'center',
        borderWidth: 2

    },
    textContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal: spacing.small,
        borderColor:colors.secondary,
        borderRadius: borderRadii.medium,
        marginVertical: spacing.small / 2,
    },
    textWrapper: {
        padding: spacing.small,
        borderColor:colors.secondary,
        borderRadius: borderRadii.medium,
        backgroundColor: colors.brownTortilla,
        
    },
    text: {
        fontSize: fontSizes.small,
        fontWeight: 'bold',
        paddingHorizontal: spacing.small,
        textAlign:'center'
    },
    userInputContainer: {
        borderColor:colors.secondary,
        borderRadius: borderRadii.medium,
        marginHorizontal: spacing.small,
        marginTop: spacing.small,
        backgroundColor: colors.signalWhite


    }
});