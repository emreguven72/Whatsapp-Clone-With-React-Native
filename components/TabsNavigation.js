import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, SafeAreaView, Button } from 'react-native';
import Chats from '../screens/Chats';
import Icon from 'react-native-ionicons'

const ChatScreen = ({navigation}) => {
  return(
    <Chats/>
  )
}

const Settings = ({navigation}) => {
  return(
    <SafeAreaView>
        <Icon name='checkmark'/>
    </SafeAreaView>
  )
}

const Tabs = createBottomTabNavigator();

const TabsNavigation = () => {
  return(
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'ChatScreen') {
                iconName = focused ? 'chatbubbles' : 'chatbubbles';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings';
              }
              // You can return any component that you like here!
              return <Icon 
                name={iconName}
                color= {focused ? 'black' : 'gray'}
              />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown:false,
          })}
      >
        <Tabs.Screen name='ChatScreen' component={ChatScreen} options={{tabBarBadge: 3}}/>
        <Tabs.Screen name='Settings' component={Settings}/>
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default TabsNavigation;