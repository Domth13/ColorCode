import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
    spacing, 
    colors, 
    fontSizes,
    borderRadii,

 } from '../../config/Theme';


import { useStateValue } from '../../hooks/useState';


import SvgComponent from '../../components/SvgIcons';
import ColorIcon from '../../components/ColorIcon';
import Button from '../../components/Button';
import ColorText from '../../components/ColorText';

export default function GameEnd() {
    const navigation = useNavigation()
    const [{darkMode}, dispatchDM] = useStateValue()
    const [{codeLength}, dispatchCL] = useStateValue()
    const [ {userInput} , dispatchUI ] = useStateValue()
    const [ {colorCode}, dispatchCC] = useStateValue()
    const [ {gameArray}, dispatchGA] = useStateValue()
    const [ {countAttempts}, dispatchCA] = useStateValue()
    const [ {finalResult}, dispatchFR] = useStateValue()

    function handleNewGame() {
        dispatchFR({
            type:'SETFINALRESULT',
            newFinalResult: {bool: false}
        })
        dispatchCA({
            type:'SETCOUNTATTEMPTS',
            newCountAttempts: {quantity: 0}
        })
        navigation.navigate('GameStart')
    }
    

    return (
        <View style={[styles.container, darkMode.bool ? {backgroundColor: colors.primaryDark} : null]}>
            <View>
            <View style={styles.colorCodeTextContainer}>
                    <Text style={styles.textWrapper}>
                        <ColorText text={'ColorCode'}/>
                    </Text>
                    <View style={styles.colorCodeWrapper}>
                        {colorCode.array.map(element => 
                            <ColorIcon key={element.id} size={50} color={element.color} />
                        )}
                </View>
                </View>  
                <View style={styles.titleIconContainer}>
                    {finalResult.bool ?
                    <View> 
                        <View style={[styles.svgContainer, darkMode.bool ? {backgroundColor: colors.primaryDark} : null]}>
                            <Text style={styles.titleTextWrapper}> 
                                <Text style={{ color: 'green'}}>
                                    Player Wins
                                </Text>
                            </Text> 
                            <SvgComponent />   
                        </View> 
                    </View> 
                    : 
                    <View>
                        
                        <View style={[styles.svgContainer, darkMode.bool ? {backgroundColor: colors.primaryDark} : null]}>
                            <Text style={styles.titleTextWrapper}> 
                                <Text style={{ color: 'red'}}>
                                    Computer Wins
                                </Text>
                            </Text> 
                            <SvgComponent />   
                        </View> 
                    </View> 
                    }
                    
                </View>
                <View style={styles.headerText}>
                    <View style={styles.textValueContainer}>
                        <Text style={[styles.textWrapper, darkMode.bool ? {color:colors.primary} : null]}>
                            <ColorText text={'Attempts'}/>
                        </Text>
                        <Text style={styles.textWrapper}>
                        {countAttempts.quantity}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button 
                        title={'New Game'}
                        borderRadius={borderRadii.medium} 
                        borderColor={darkMode.bool ? colors.purple : colors.orange}
                        padding={spacing.medium}
                        fontSize={fontSizes.medium}
                        onPress={() => handleNewGame()}
                        backgroundColor={darkMode.bool ? colors.purple : colors.orange}
                        fontColor={colors.textSecondary}
                        />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.signalWhite,   
    },

    titleIconContainer: {

    },

    headerText:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingBottom: spacing.medium,
        paddingTop: spacing.medium
    },

    svgContainer: {
        paddingTop: spacing.xxl,
        alignItems:'center',
        justifyContent:'center',    
        borderRadius: borderRadii.medium,
        marginHorizontal: spacing.medium
    },

    colorCodeWrapper: {
        flexDirection:'row'
    },

    colorCodeTextContainer: {
        alignItems:'center', 
        paddingBottom: spacing.medium,
        paddingTop: spacing.xl
    },

    textValueContainer: {
        alignItems:'center',
        padding: spacing.small,
        marginTop: spacing.small
    },
    titleTextWrapper: {
        fontSize: fontSizes.mediumLarge,
        fontWeight:'bold',  
    },

    textWrapper: {
        fontSize: fontSizes.mediumLarge,
        padding: spacing.small,
        fontWeight:'bold',
        color:colors.primaryDark
    }, 

    buttonContainer: {
        alignItems:'center',
        padding: spacing.small,
        paddingTop: spacing.xxl,   
    },

    buttonWrapper: {
        paddingVertical: spacing.small,
        width: '80%' 
    }

  });