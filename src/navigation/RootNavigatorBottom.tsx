import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen } from './screen';
import TabBarItem from './TabBarItem';

const Tab = createBottomTabNavigator();

const RootNavigatorBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'homepage') {
            return (
              <TabBarItem
                focused={focused}
                normalIcon={require('../assets/tab/home.png')}
                selectIcon={require('../assets/tab/ac_home.png')}
              />
            );
          } else if (route.name === 'profile') {
            return (
              <TabBarItem
                focused={focused}
                normalIcon={require('../assets/tab/profile.png')}
                selectIcon={require('../assets/tab/ac_profile.png')}
              />
            );
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="homepage" component={HomeScreen} options={{ tabBarLabel: '首页' }} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{ tabBarLabel: '设置' }} />
    </Tab.Navigator>
  );
};

export default RootNavigatorBottom;
