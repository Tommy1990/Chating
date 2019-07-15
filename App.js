import React,{Component} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,createAppContainer,
  createSwitchNavigator,createDrawerNavigator,AppRegistry} from 'react-navigation';
import LoginScreen from './src/login/LogInScreen';
import LoadingScreen from './src/Base/LoadingScreen';
import BaseLoading from './src/Base/BaseLoading';
import ResetPswdScreen from './src/login/ResetPswdScreen';
import BaseColor from './src/Base/BaseColor';
import BaseStyles from './src/Base/BaseStyle';

const LoginNav = createStackNavigator({
  Login:LoginScreen,
  ResetPswd:ResetPswdScreen
},{
  initialRouteName:'Login',
  defaultNavigationOptions:({navigation})=>{
    return({
      headerBackTitle:null,
      headerBackground:<View style={BaseStyles.headerBackground}/>
    })
  }
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
      <BaseLoading
      ref={(ref)=>{
        global.mLoadingComponentRef = ref
      }}/>
    </View>)
  }
}