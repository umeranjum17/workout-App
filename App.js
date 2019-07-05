import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exercise from './screens/exercise.js';
import main from './screens/mainPage.js';
import {createStackNavigator, createAppContainer} from 'react-navigation';


const MainNavigator = createStackNavigator({
  Exercise: {screen: main},
  Main: {screen: main},
});

const App = createAppContainer(MainNavigator);

export default App;