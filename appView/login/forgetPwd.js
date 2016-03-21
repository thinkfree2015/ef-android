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
import store from './../redux/store';
import { fetchPosts } from './../redux/actions/loginAction';
import LoginView from './login';
var timestamp=new Date().getTime();


//主页
export default class ForgetPwd extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            inputPhone:"",
            inputVCode:"",
            inputPassword:"",
            isGetcode:false
        };
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
    getDataJsonCode(){
        let data='';
        console.log(this.state.inputPhone);
        putJson('username',this.state.inputPhone);
        putJson('timestamp',timestamp+"");
        data =getJson();
        return  data;
    }
    getCode(){
        store.dispatch(fetchPosts('/app/sendCode.do',this.getDataJsonCode())).then((json) =>{
            var dataState = store.getState();
            if (dataState.pageByLogin.ServerData.resultCode==0){
                this.setState({
                    isGetcode:true
                })
                ToastAndroid.show("收到验证码，两分钟内有效",ToastAndroid.LONG);
            }else {
                ToastAndroid.show("获取验证码失败，请重新获取",ToastAndroid.LONG);
            }
        }).catch((error)=>{
            console.log(error)
        }).done();

    }
    back(){
        const { navigator } = this.props;
        navigator.pop();
    }
    getDataJsonFindPwd(){
        let data='';
        console.log(this.state.inputPhone);
        putJson('username',this.state.inputPhone);
        putJson('password',this.state.inputPassword);
        putJson('timestamp',timestamp+"");
        data =getJson();
        console.log(data+"xxxxxxx");
        return  data;
    }
    confirm(){
        const { navigator } = this.props;
        const re = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        const reg = /^[0-9a-zA-Z]+$/;
        if (this.state.isGetcode){
            if (this.state.inputPhone){
                if (re.test(this.state.inputPhone)){
                    if (this.state.inputVCode){
                        if (this.state.inputPassword){
                            if (reg.test(this.state.inputpassword) && this.state.inputPassword.length>=6 && this.state.inputPassword.length<=16){
                                store.dispatch(fetchPosts('/app/verifyCode.do',this.getDataJsonVCode())).then((json) =>{
                                    var dataState = store.getState();
                                    console.log("verifyCode.do"+dataState.pageByLogin);
                                    if (dataState.pageByLogin.ServerData.resultCode==0){
                                        store.dispatch(fetchPosts('/app/retrievePassword.do',this.getDataJsonFindPwd())).then((json) =>{
                                            var dataState = store.getState();
                                            if (dataState.pageByLogin.ServerData.resultCode==0){
                                                ToastAndroid.show("密码修改成功",ToastAndroid.LONG);
                                                //往原生里传数据
                                                navigator.push({
                                                    component: LoginView,
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
                                ToastAndroid.show("密码不能为空，请输入6-16位的字母或数字组成的密码",ToastAndroid.LONG);
                            }
                        }else{
                            ToastAndroid.show("密码不能为空，请输入6-16位的字母或数字组成的密码",ToastAndroid.LONG);
                        }
                    }else {
                        ToastAndroid.show("验证码不能为空,请输入正确的6位验证码",ToastAndroid.LONG);
                    }
                }else {
                    ToastAndroid.show("手机号格式不正确,请输入正确的手机号",ToastAndroid.LONG);
                }
            }else {
                ToastAndroid.show("手机号不能为空",ToastAndroid.LONG);
            }
        }

    }
    render() {
        return (
            <View style={styles.login}>
                <Header
                    title={'忘记密码'}
                    BackIcon={true}
                    backPress={this.back.bind(this)}/>
                <LoginInput newObj={{
                    placeholder:'请输入手机号'}}
                    onChangeText ={(text) => this.setState({inputPhone: text})}
                    />
                <Authcode newObj={{text:'请输入验证码'}}
                          onChangeText={(text) => this.setState({inputVCode: text})}
                          onPress={this.getCode.bind(this)}/>
                <LoginInput newObj={{placeholder:'设置密码'}}
                            onChangeText={(text) => this.setState({inputPassword: text})}
                            secureTextEntry={true}/>
                <LoginButton newObj={{text:'确     定'}} oPress={this.confirm.bind(this)}/>
            </View>
        )
    }
}





const styles=StyleSheet.create({
    btn_view:{
        marginRight:22,
        marginTop:15
    },
    btn_text:{
        color:'#3b99ff'
    },






});