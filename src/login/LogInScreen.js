import React,{Component} from 'react';
import {View,Text,StyleSheet,StatusBar,TextInput,TouchableOpacity,TouchableWithoutFeedback,Image} from 'react-native';
import BaseColor from '../Base/BaseColor';
import { thisExpression } from '@babel/types';
import LoadingUtil from '../Base/BaseLoadingUtil';

class LoginScreen extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
        this.state = {
            phone:'',
            pswd:'',
            advice:''
        }
    }
    _cancelInput = ()=>{
        this._phoneInput.blur()
        this._pswdInput.blur()
    }
    _phoneInputing = (value)=>{
        this.setState({
            phone:value
        })
    }
    _pswdInputing = (value)=>{
        this.setState({
            pswd:value
        })
    }
    _submitBtnPress = ()=>{
        var reg =/^0{0,1}(1[3-9])[0-9]{9}$/
        let phone = this.state.phone
        let pswd = this.state.pswd
        if(!reg.test(phone)){
            this.setState({
                advice:'请输入正确的手机号'
            })
        } else if (pswd.length < 6){
            this.setState({
                advice:'请输入正确的密码'
            })
        } else{
            this.setState({
                advice:'123'
            })
            this._fetchData()
        }
    }
    _fetchData = ()=>{
        LoadingUtil.showLoading()
        setInterval(()=>{
            LoadingUtil.dismissLoading()
        },3000)
    }
    _resetPswdBtnPress = ()=>{
        this.props.navigation.navigate('ResetPswd')
    }
    _registerBtnPress = ()=>{

    }
    render(){
        let img = require('../../img/base/log.png')
        return(<View style={{flex:1}}>
            <StatusBar barStyle='light-content'/>
            <TouchableWithoutFeedback onPress = {()=> this._cancelInput() }
            style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Image source={img} style={styles.icon} resizeMode="contain"></Image>
                        </View>
                        <Text style={styles.title}>圈聊</Text>
                        <View  style={styles.rowContaner}>
                            <Text style={styles.deslab}>手机号: </Text>
                            <TextInput ref ={component => this._phoneInput = component}
                            maxLength = {11}
                            onChangeText = {(value)=> this._phoneInputing(value)}
                            keyboardType = 'phone-pad'
                            placeholder="请输入手机号"
                            style={styles.input}/>
                        </View>
                        <View  style={styles.rowContaner}>
                            <Text style={styles.deslab}>密码:</Text>
                            <TextInput ref = {component=> this._pswdInput = component}
                            secureTextEntry = {true}
                            maxLength={16}
                            onChangeText = {(value)=> this._pswdInputing(value)}
                            keyboardType='ascii-capable'
                            placeholder="请输入密码"
                            style={styles.input}/>
                        </View>
                        <TouchableOpacity onPress={()=> this._submitBtnPress()}
                        style={styles.loginBtn}>
                            <Text style={styles.loginBtnLab}>登录</Text>
                        </TouchableOpacity>
                        <Text style={styles.advice}>{this.state.advice}</Text>
                        <View style={styles.rowSpaceContainer}>
                            <TouchableOpacity onPress={()=> this._resetPswdBtnPress()}
                            hitSlop={{left:10,top:10,bottom:10,right:10}}>
                                <Text style={styles.signLab}>忘记密码</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=> this._registerBtnPress()}
                            hitSlop={{left:10,top:10,bottom:10,right:10}}>
                                <Text style={styles.signLab}>注册</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </TouchableWithoutFeedback> 
        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    header:{
        width:'100%',
        height:300,
        backgroundColor:BaseColor.theme(),
        justifyContent:'center',
        alignItems:"center"
    },
    icon:{
        width:200,
        height:300
    },
    title:{
        fontSize:60,
        fontWeight:'bold',
        color:BaseColor.theme(),
        marginTop:10,
        marginBottom:10
    },
    rowContaner:{
        flexDirection:'row',
        alignItems:'center',
        width:'90%',
        height:52,
        borderBottomColor:BaseColor.gray(),
        borderBottomWidth:1
    },
    deslab:{
        fontSize:20,
        color:'#333',
        width:70
    },
    input:{
        fontSize:20,
        color:'#333',
        width:'60%',
        marginLeft:20
    },
    loginBtn:{
        backgroundColor:BaseColor.theme(),
        width:'90%',
        height:42,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    loginBtnLab:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    advice:{
        color:'red',
        fontSize:13,
        width:'90%',
        marginTop:6
    },
    rowSpaceContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:52,
        width:'90%'
    },
    signLab:{
        color:BaseColor.theme(),
        fontSize:20
    }
})

export default LoginScreen;