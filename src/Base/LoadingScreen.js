import React,{Component} from 'react';
import {View,ActivityIndicator} from 'react-native';
class LoadingScreen extends Component{
    render(){
        return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator />
        </View>)
    }
}
export default LoadingScreen;