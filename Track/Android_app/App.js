import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {styles} from './screens/style.js';
import home from './screens/home.js';
import signin from './screens/signin.js';
import signup from './screens/signup.js';


const Stack = createStackNavigator();
//screenOptions={{headerShown:false,}}
function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={home} />
      <Stack.Screen name="signin" component={signin} />
      <Stack.Screen name="signup" component={signup} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
     <MyStack />
    </NavigationContainer>
  );
}

