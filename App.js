import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Username from './Screens/Username';
import Home from './Screens/Home';
import Pages from './Screens/Pages';
import TVshows from './Screens/TVshows';
import Movies from './Screens/Movies';

export const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={null}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Username" component={Username} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pages" component={Pages} />
        <Stack.Screen name="TVshows" component={TVshows} />
        <Stack.Screen name="Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
