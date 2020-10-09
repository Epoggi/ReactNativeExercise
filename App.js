import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Exercises/Home'
import Recipepuppy from './Exercises/Recipepuppy'
import CoinEx from './Exercises/CoinEx'
import Jobs from './Exercises/Jobs'
import Calculator from './Exercises/Calculator'
import CalculatorHistory from './Exercises/CalculatorHistory'
import Maps101 from './Exercises/Maps101'
import Maps103 from './Exercises/Maps103'

export default function App() {

const Stack = createStackNavigator();

  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Maps101" component={Maps101}/>
       <Stack.Screen name="Maps103" component={Maps103}/>
       <Stack.Screen name="CoinEx" component={CoinEx}/>
       <Stack.Screen name="Recipepuppy" component={Recipepuppy}/>
       <Stack.Screen name="Jobs" component={Jobs}/>
       <Stack.Screen name="Calculator" component={Calculator}/>
       <Stack.Screen name="CalculatorHistory" component={CalculatorHistory}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}