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
import ShoppingListV2 from './Exercises/ShoppingListV2'
import Contacts from './Exercises/Contacts'
import Text_to_Speech from './Exercises/Text_to_Speech'
import ShoppingElements from './Exercises/ShoppingElements'
import TestField from './Exercises/TestField'
import MyPlaces from './Exercises/MyPlaces'
import MyMap from './Exercises/MyMap'
import CheckBox from './Exercises/CheckBox'
import CheckBoxE from './Exercises/CheckBoxE'
import CheckBoxC from './Exercises/CheckBoxC'
import MultipleTagsTest from './Exercises/MultipleTagsTest'
import WelcomeComponent from './Exercises/MultipleTags copy'
export default function App() {

const Stack = createStackNavigator();

  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="MyPlaces" component={MyPlaces}/>
       <Stack.Screen name="MyMap" component={MyMap}/>
       <Stack.Screen name="ShoppingElements" component={ShoppingElements}/>
       <Stack.Screen name="Text to Speech" component={Text_to_Speech}/>
       <Stack.Screen name="Contacts" component={Contacts}/>
       <Stack.Screen name="ShoppingListV2" component={ShoppingListV2}/>
       <Stack.Screen name="Maps101" component={Maps101}/>
       <Stack.Screen name="Maps103" component={Maps103}/>
       <Stack.Screen name="CoinEx" component={CoinEx}/>
       <Stack.Screen name="Recipepuppy" component={Recipepuppy}/>
       <Stack.Screen name="Jobs" component={Jobs}/>
       <Stack.Screen name="Calculator" component={Calculator}/>
       <Stack.Screen name="CalculatorHistory" component={CalculatorHistory}/>
       <Stack.Screen name="TestField" component={TestField}/>
       <Stack.Screen name="MultipleTags" component={MultipleTagsTest}/>
       <Stack.Screen name="MultipleTagsOld" component={WelcomeComponent}/>
       <Stack.Screen name="CheckBox" component={CheckBox}/>
       <Stack.Screen name="CheckBoxE" component={CheckBoxE}/>
       <Stack.Screen name="CheckBoxC" component={CheckBoxC}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}