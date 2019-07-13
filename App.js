import React,{Component} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,createAppContainer,
  createSwitchNavigator,createDrawerNavigator,AppRegistry} from 'react-navigation';
import LoginScreen from './src/login/LogInScreen';
import LoadingScreen from './src/Base/LoadingScreen';

const LoginNav = createStackNavigator({
  Login:LoginScreen
},{
  initialRouteName:'Login'
})

const SwitchNav = createSwitchNavigator({
  Loginnav:LoginNav,
  Loading : LoadingScreen
},{
  initialRouteName:'Loginnav'
})

const AppContainer = createAppContainer(SwitchNav);

export default class App extends Component{
  render(){
    return(<View style={{flex:1,position:'relative'}}>
      <AppContainer/>
    </View>)
  }
}