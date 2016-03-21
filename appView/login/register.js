/**
 * Created by qiuxi on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import {styles as styles0,Header} from './../common/styles';
import {LoginInput,LoginButton,Authcode} from './../common/nobusiness';
import { putJson, getJson} from '../util/jsonUtil';
import {hex_sha1} from '../util/sha1';
import store from './../redux/store';
import { fetchPosts } from './../redux/actions/loginAction';
var timestamp=new Date().getTime();
var code=-1;
import RegSucceedView from './regSucceed';
import LoginView from './login'



//主页
export default class Register extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            inputPhone:'',
            inputVCode:'',
            inputPassword:'',
            inputPwAgain:'',
            isGetcode:false
        };
    }
    getDataJsonCode(){
        let data='';
        console.log(this.state.inputPhone);
        putJson('username',this.state.inputPhone);
        putJson('timestamp',timestamp+"");
        data =getJson();
        return  data;
    }
    getDataJsonVCode(){
        let data='';
        console.log(this.state.inputPhone);
        putJson('username',this.state.inputPhone);
        putJson('code',this.state.inputVCode);
        putJson('timestamp',timestamp+"");
        data =getJson();
        console.log(data+"xxxxxxx");
        return  data;
    }
    getDataJsonRegister(){
        let data='';
        console.log(this.state.inputPhone);
        putJson('username',this.state.inputPhone);
        putJson('password',hex_sha1(this.state.inputPassword));
        putJson('truename2','durui');
        putJson('timestamp',timestamp+"");
        data =getJson();
        console.log(data+"xxxxxxx");
        return  data;
    }
    getCode(){
        if (code==0){
            store.dispatch(fetchPosts('/app/sendCode.do',this.getDataJsonCode())).then((json) =>{
                var dataState = store.getState();
                if (dataState.pageByLogin.ServerData.resultCode==0){
                    this.setState({
                        isGetcode:true
                    })
                }else {
                    ToastAndroid.show("获取验证码失败，请重新获取",ToastAndroid.LONG);
                }
            }).catch((error)=>{
                console.log(error)
            }).done();
        }
    }

    register(){
        const { navigator } = this.props;
        const reg = /^[0-9a-zA-Z]+$/;
        if (this.state.isGetcode){
            if (this.state.inputVCode){
                if (this.state.inputPassword){
                    if (reg.test(this.state.inputpassword) && this.state.inputPassword.length>=6 && this.state.inputPassword.length<=16){
                        if (this.state.inputPwAgain){
                            if (reg.test(this.state.inputPwAgain) && this.state.inputPwAgain.length>=6 && this.state.inputPwAgain.length<=16){
                                if (this.state.inputPassword==this.state.inputPwAgain){
                                    store.dispatch(fetchPosts('/app/verifyCode.do',this.getDataJsonVCode())).then((json) =>{
                                        var dataState = store.getState();
                                        console.log("verifyCode.do"+dataState.pageByLogin);
                                        if (dataState.pageByLogin.ServerData.resultCode==0){
                                            store.dispatch(fetchPosts('/app/register.do',this.getDataJsonRegister())).then((json) =>{
                                                var dataState = store.getState();
                                                console.log("register.do"+dataState.pageByLogin);
                                                if (dataState.pageByLogin.ServerData.resultCode==0){
                                                    navigator.push({
                                                        component: RegSucceedView,
                                                        params: {
                                                            username: this.state.inputPhone,
                                                        }
                                                    })
                                                }
                                            }).catch((error)=>{
                                                console.log(error)
                                            }).done();
                                        }
                                    }).catch((error)=>{
                                        console.log(error)
                                    }).done();
                                }else {
                                    ToastAndroid.show("两次输入的密码不一样,请重新输入",ToastAndroid.LONG);
                                }
                            }else {
                                ToastAndroid.show("密码格式不对,请输入6-16位的字母或数字组成的密码",ToastAndroid.LONG);
                            }
                        }else {
                            ToastAndroid.show("密码不能为空,请输入6-16位的字母或数字组成的密码",ToastAndroid.LONG);
                        }
                    }else {
                        ToastAndroid.show("密码格式不对,请输入6-16位的字母或数字组成的密码",ToastAndroid.LONG);
                    }
                }else {
                    ToastAndroid.show("密码不能为空，请输入6-16位的字母或数字组成的密码",ToastAndroid.LONG);
                }
            }else {
                ToastAndroid.show("验证码不能为空,请输入6位验证码",ToastAndroid.LONG);
            }

        }
    }
    sendPhone(){
        const re = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (this.state.inputPhone){
            if (re.test(this.state.inputPhone)){
                store.dispatch(fetchPosts('/app/checkUserName.do',this.getDataJsonCode())).then((json) =>{
                    var dataState = store.getState();
                    console.log("dataState.pageByLogin"+dataState.pageByLogin);
                    console.log("dataState.pageByLogin"+dataState.pageByLogin.ServerData.resultCode);
                    if(dataState.pageByLogin.ServerData.resultCode==0){
                        code=dataState.pageByLogin.ServerData.resultCode;
                    }else {
                        ToastAndroid.show("该手机号已经注册,请重新输入",ToastAndroid.LONG);
                    }
                }).catch((error)=>{
                    console.log(error)
                }).done();
            }else {
                ToastAndroid.show("手机号格式不正确,请输入正确的手机号",ToastAndroid.LONG);
            }
        }else {
            ToastAndroid.show("手机号不能为空",ToastAndroid.LONG);
        }
    }
    login(){
        const { navigator } = this.props;
        navigator.push({component:LoginView});
    }
    back(){
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={styles.login}>
                <Header
                    title={'快速注册'}
                    BackIcon={true}
                    backPress={this.back.bind(this)}/>
                <LoginInput newObj={{
                    placeholder:'请输入手机号'}}
                    onChangeText ={(text) => this.setState({inputPhone: text})}
                    onBlur={this.sendPhone.bind(this)}/>
                <Authcode
                    newObj={{text:'获取验证码'}}
                    onChangeText={(text) => this.setState({inputVCode: text})}
                    onPress={this.getCode.bind(this)}/>
                <LoginInput newObj={{placeholder:'请输入密码'}}
                            onChangeText={(text) => this.setState({inputPassword: text})}
                            secureTextEntry={true}/>
                <LoginInput newObj={{placeholder:'请再次输入密码'}}
                            onChangeText={(text) => this.setState({inputPwAgain: text})}
                            secureTextEntry={true}/>
                <LoginButton newObj={{text:'注     册'}}
                             oPress={this.register.bind(this)}/>

                <View style={[styles0.flex,styles0.row,styles.btn_view]}>
                    <TouchableOpacity style={[styles0.right,styles0.flex,styles.login_text]} onPress={this.login.bind(this)}>
                        <Text style={[styles0.fz11,styles0.color3b]}>立即登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}





const styles=StyleSheet.create({
    btn_view:{
        marginRight:22,
        marginTop:15
    },
});