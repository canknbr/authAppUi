import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './screens/SignInScreen'
const Stack = createNativeStackNavigator() 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App