import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import Chats from '../screens/Chats';
import Settings from '../screens/Settings';
import { colors } from '../config/Config';
import SignUp from '../screens/SignUp';


const MainStack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
    return(
        <Tabs.Navigator
            backgroundColor= 'red'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Chats') {
                        iconName = 'chatbubbles';
                    } else if(route.name === 'Settings') {
                        iconName = 'settings';
                    }
                    return <Icon name={iconName} color={focused ? 'black' : 'gray'}/>
                },
                headerShown:false,
                tabBarActiveTintColor: 'black',
                tabBarActiveBackgroundColor: colors.grayBackground,
                tabBarInactiveBackgroundColor: colors.grayBackground,
            })}
        >
            <Tabs.Screen name='Chats' component={ChatsScreen}/>
            <Tabs.Screen name='Settings' component={SettingsScreen}/>
        </Tabs.Navigator>
    )
}

const ChatsStack = createNativeStackNavigator();

const ChatsScreen = () => {
    return(
        <ChatsStack.Navigator
            screenOptions={{headerShown:false}}
        >
            <ChatsStack.Screen name='ChatsScreen' component={Chats}/>
        </ChatsStack.Navigator>
    )
}

const SettingsStack = createNativeStackNavigator();

const SettingsScreen = () => {
    return(
        <SettingsStack.Navigator
            screenOptions={{headerShown:false}}
        >
            <SettingsStack.Screen name='SettingsScreen' component={Settings}/>
        </SettingsStack.Navigator>
    )
}

const MixedNavigation = () => {
    return(
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
                >
                <MainStack.Screen name='HomeScreen' component={HomeScreen}/>
                <MainStack.Screen name='SignUpScreen' component={SignUp}/>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MixedNavigation;