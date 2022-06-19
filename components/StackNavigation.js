import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, SafeAreaView, Text } from 'react-native';

const Home = ({navigation}) => {
  return(
    <SafeAreaView>
      <Text>Hi, Home Screen</Text>
      <Button
        title='Settings'
        onPress={() => {
          navigation.push('Settings');
        }}
      />
    </SafeAreaView>
  )
}

const Settings = ({navigation}) => {
  return(
    <SafeAreaView>
      <Text>Hi, Settings Screen</Text>
      <Button 
      title='Home'
      onPress={() => {
        navigation.push('Home');
      }}
      />
    </SafeAreaView>
  )
}

const MainStack = createNativeStackNavigator();

const StackNavigation = () => {
  return(
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name='Home' component={Home}/>
        <MainStack.Screen name='Settings' component={Settings}/>
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;