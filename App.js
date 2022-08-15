import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StateProvider } from './src/hooks/useState';

import GameStart from './src/pages/GameSetup'
import GamePage from './src/pages/GamePage'
import GameEnd from './src/pages/GameEnd'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';



const Stack = createNativeStackNavigator();

export default function App() {
    
    return (
        <StateProvider >
            <NavigationContainer >
                <Stack.Navigator 
                  initialRouteName='GameStart'
                  screenOptions={{ headerShown: false}} 
                  >
                    <Stack.Screen name='GameStart' component={GameStart} />
                    <Stack.Screen name='GamePage' component={GamePage} />
                    <Stack.Screen name='GameEnd' component={GameEnd} />
                </Stack.Navigator>
                {<ExpoStatusBar style='auto'/>}
            </NavigationContainer>
        </StateProvider>
    )
}
