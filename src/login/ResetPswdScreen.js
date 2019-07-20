import React,{Component} from 'react';
import {View,TouchableOpacity,Text,TouchableWithoutFeedback,StyleSheet,TextInput,Image} from 'react-native';
import BaseStyles from '../Base/BaseStyle';
import BaseColor from '../Base/BaseColor';
import BaseRegx from '../Base/BaseRegx'
class ResetPswdScreen extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
        this.state={
            showComponent:false,
            advice:'',
            phone:'',
            valid:'',
            pswd:''
        }
    }
    componentDidMount(){
        let type = this.props.navigation.getParam('type','resetPswd')
        if(type == 'register' ){
            this.setState({
                showComponent:true,
            })
        }
    }
    _endEditing = ()=>{
        this._phoneRef.blur()
        this._vaildRef.blur()
        this._pswdRef.blur()
    }
    _phoneInputing = (value)=>{
        this.setState({
            phone:value
        })
    }
    _validInputing = (value)=>{
        this.setState({
            valid:value
        })
    }
    _pswdInputing = (value)=>{
        this.setState({
            pswd:value
        })
    }
    _validBtnPress = ()=>{
        let phone = this.state.phone
        if(!BaseRegx.phone(phone)){
            this.setState({
                advice:'手机号错误'
            })
        }else{
            this.setState({
                advice:''
            })
        }
    }
    _subbtnPress = ()=>{
        let phone = this.state.phone
        let valid = this.state.valid
        let pswd = this.state.pswd

        if(!BaseRegx.phone(phone)){
            this.setState({
                advice:'手机号错误'
            })
        }else if(!BaseRegx.valid(valid)){
            this.setState({
                advice:'验证码错误'
            })
        }else if(!BaseRegx.valid(pswd)){
            this.setState({
                advice:'密码过于简单,必须包含数字和字母'
            })
        }else{
            this.setState({
                advice:''
            })
        }
    }
    _backBtnPress = ()=>{
        this.props.navigation.goBack()
    }
    render(){
        let img = require('../../img/base/log.png')
        let btnLab = this.state.showComponent  ? '注册' : '重置密码'
        let item = <View/>
        if(this.state.showComponent){
            item = <View style={[styles.cellContainer,{marginTop:20}]}>
            <TouchableOpacity onPress={this._backBtnPress}
            style={styles.submitBtn}>
                <Text style={styles.submitLab}>已有账号直接登录</Text>
            </TouchableOpacity>
        </View>
        }
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
                            onChangeText={(value)=> this._phoneInputing(value)}
                            placeholder="请输入手机号"
                            keyboardType='phone-pad'
                            maxLength={11}
                            style={styles.input}/>
                            <TouchableOpacity onPress={this._validBtnPress}
                            style={styles.btn}>
                                <Text style={styles.btnLab}>获取验证码</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cellContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.deslab}>验证码</Text>
                            <TextInput ref = {component => this._vaildRef = component}
                            onChangeText={(value)=>this._validInputing(value)}
                            placeholder="请输入验证码"
                            keyboardType='number-pad'
                            style={styles.input}/>
                        </View>
                    </View>
                    <View style={styles.cellContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.deslab}>密码</Text>
                            <TextInput ref = {component => this._pswdRef = component}
                            onChangeText={(value)=>this._pswdInputing(value)}
                            placeholder="请输入密码"
                            keyboardType="ascii-capable"
                            style={styles.input}/>
                        </View>
                    </View>
                    <Text style={styles.advice}>{this.state.advice}</Text>
                    <View style={[styles.cellContainer,{marginTop:20}]}>
                        <TouchableOpacity onPress={this._subbtnPress}
                        style={styles.submitBtn}>
                            <Text style={styles.submitLab}>{btnLab}</Text>
                        </TouchableOpacity>
                    </View>
                    {item}
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