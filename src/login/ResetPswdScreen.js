import React,{Component} from 'react';
import {View,TouchableOpacity,Text,TouchableWithoutFeedback,StyleSheet,TextInput,Image} from 'react-native';
import BaseStyles from '../Base/BaseStyle';
import BaseColor from '../Base/BaseColor';
class ResetPswdScreen extends Component{
    static navigationOptions = {
        header:null
    }
    _endEditing = ()=>{
        this._phoneRef.blur()
        this._vaildRef.blur()
        this._pswdRef.blur()
    }
    render(){
        let img = require('../../img/base/log.png')
        return(<View style={BaseStyles.container}>
            <TouchableWithoutFeedback onPress={()=> this._endEditing()}
            style={styles.touchContainer}>
                <View style={styles.touchContainer}>
                    <View style={styles.header}>
                            <Image source={img} style={styles.icon} resizeMode="contain"></Image>
                        </View>
                    <View style={styles.cellContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.deslab}>手机号</Text>
                            <TextInput ref={component => this._phoneRef = component}
                            placeholder="请输入手机号"
                            style={styles.input}/>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnLab}>获取验证码</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cellContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.deslab}>验证码</Text>
                            <TextInput ref = {component => this._vaildRef = component}
                            placeholder="请输入验证码"
                            style={styles.input}/>
                        </View>
                    </View>
                    <View style={styles.cellContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.deslab}>密码</Text>
                            <TextInput ref = {component => this._pswdRef = component}
                            placeholder="请输入密码"
                            style={styles.input}/>
                        </View>
                    </View>
                    <View style={[styles.cellContainer,{marginTop:20}]}>
                        <TouchableOpacity style={styles.submitBtn}>
                            <Text style={styles.submitLab}>重置密码</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.advice}>12349</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>)
    }
}
const styles = StyleSheet.create({

    touchContainer:{
        width:'100%',
        height:'100%'
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
    cellContainer:{
        width:'100%',
        height:52,
        alignItems:'center',
        paddingLeft:17,
        paddingRight:17,
    },
    rowContainer:{
        width:'100%',
        height:52,
        alignItems:'center',
        flexDirection:'row',
        borderBottomColor:BaseColor.gray(),
        borderBottomWidth:1
    },
    deslab:{
        fontSize:20,
        color:'#333',
        width:70,
    },
    input:{
        fontSize:20,
        color:'#333',
        width:200
    },
    btn:{
        height:40,
        borderRadius:6,
        backgroundColor:BaseColor.theme(),
        alignItems:'center',
        justifyContent:'center'
    },
    btnLab:{
        fontSize:20,
        color:'#fff',
        padding:5
    },
    submitBtn:{
        width:'90%',
        height:40,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:BaseColor.theme()
    },
    submitLab:{
        color:'#fff',
        fontSize:20,
    },
    advice:{
        color:'red',
        fontSize:13,
        width:'90%',
        marginLeft:17
    }
    
})
export default ResetPswdScreen;