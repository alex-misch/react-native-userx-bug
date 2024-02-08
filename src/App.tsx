/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Post} from './Post';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

const UserX = require('react-native-userx').default;
UserX.start('USERX_KEY');

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          detachInactiveScreens={false}
          screenOptions={{detachPreviousScreen: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

function HomeScreen({navigation}: Props) {
  return (
    <>
      <ScrollView>
        {Array(80)
          .fill(0)
          .map((_, index) => (
            <Post key={index} onPress={() => navigation.push('Second')} />
          ))}
      </ScrollView>
    </>
  );
}

function SecondScreen({navigation}: Props) {
  return (
    <ScrollView>
      {Array(80)
        .fill(0)
        .map((_, index) => (
          <Post key={index} onPress={() => navigation.push('Second')} />
        ))}
    </ScrollView>
  );
}

export default App;
