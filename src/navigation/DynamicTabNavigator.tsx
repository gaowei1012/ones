import * as React from 'react'
import 'react-native-gesture-handler'
import { setToLeveNavigator } from '@/utils'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RootNavigatorBottom from './RootNavigatorBottom'

const Stack = createNativeStackNavigator()

export default function DynamicTabNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigatorRef => setToLeveNavigator(navigatorRef)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='root' component={RootNavigatorBottom} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
