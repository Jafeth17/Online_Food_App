import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LandingScreen } from './src/screens/LandingScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { HomeScreen } from './src/screens/HomeScreen';

const switchNavigator = createSwitchNavigator({

  landingStack: {
    screen: createStackNavigator({
      Landing: LandingScreen,
    },{
      defaultNavigationOptions:{
        headerShown: false
      }
    })
  }

});


const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    < AppNavigation />
  );
}


const styles = StyleSheet.create({

  tabIcon:{
    width:30,
    height:30
  }
});
