import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const STAKE = createNativeStackNavigator();

import Detail from './screens/Detail';
import Home from './screens/Home';
import {Image} from 'react-native';
import {pokemon_logo} from '../assets/pokemon_logo.png'

export default function Router() {
  return (
    <NavigationContainer>
      <STAKE.Navigator
        screenOptions={{
          headerLeft: () => {
            <Image source={pokemon_logo} />;
          },
          headerStyle: {
            backgroundColor: '#21386E',
            height: '1%',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
          },
        }}>
        <STAKE.Screen name="Home" component={Home} />
        <STAKE.Screen name="Detail" component={Detail} />
      </STAKE.Navigator>
    </NavigationContainer>
  );
}
