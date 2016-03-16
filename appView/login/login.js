/**
 * Created by qiuxi on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import {styles as styles0,Header,LogoWechat,LogoSina,LogoQQ} from './../common/styles';
import {LoginInput,LoginButton} from './../common/nobusiness';
import RegisterView from './register';
import { putJson, getJson,getJsonStr} from '../util/jsonUtil';
import {hex_sha1} from '../util/sha1';
import store from './../redux/store';
import { fetchPosts } from './../redux/actions/loginAction'
var timestamp=new Date().getTime();

//主页
export default class Login extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            inputphone:'',
            inputpassword:''
        };
    }
    getDataJson(){
        var date='';
        putJson('username',this.state.inputphone);
        putJson('password',hex_sha1(this.state.inputpassword));//hex_sha1(this.state.inputpassword)
        putJson('timestamp',timestamp+"");
        date =getJson();
        console.log(date.signmsg+"signmsg");
        return  date;
    }
    login(){
        const re = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        const reg = /^[0-9a-zA-Z]+$/;
        if (this.state.inputphone){
            if (re.test(this.state.inputphone)){
                if (this.state.inputpassword){
                    if (reg.test(this.state.inputpassword) && this.state.inputpassword.length>=6 && this.state.inputpassword.length<=18){
                        store.dispatch(fetchPosts('/app/login.do',this.getDataJson())).then((json) =>{
                            var dataState = store.getState();
                            console.log("dataState.pageByLogin"+dataState.pageByLogin);
                            /*const { navigator } = this.props;
                             navigator.push()*/
                        }).catch((error)=>{
                            console.log(error)
                        }).done();
                    }else {
                        ToastAndroid.show("密码格式不对,请输入6-16位的字母或数字组成的密码",ToastAndroid.LONG);
                    }
                }else{
                    ToastAndroid.show("密码不能为空,请输入6-16位的字母或数字组成的密码",ToastAndroid.LONG);
                }
            }else {
                ToastAndroid.show("手机号格式不正确,请输入正确的手机号",ToastAndroid.LONG);
            }
        }else {
            ToastAndroid.show("手机号不能为空,请输入手机号",ToastAndroid.LONG);
        }
    }
    back(){
        const {navigator}=this.props;
        navigator.pop();
    }
    forgetPwd(){

    }
    render() {
        return (
            <View style={styles.login}>
                <Header
                    title={'登录'}
                    BackIcon={true}
                    backPress={this.back.bind(this)}/>
                <LoginInput newObj={{placeholder:'请输入手机号/e飞蚁账号'}} onChangeText={(text) => this.setState({inputphone:text})}/>
                <LoginInput newObj={{placeholder:'请输入密码'}} secureTextEntry={true} onChangeText={(text) => this.setState({inputpassword:text})}/>
                <LoginButton newObj={{text:'登     录'}} oPress={this.login.bind(this)}/>


                <View style={[styles0.flex,styles0.row,styles.login_p]}>
                    <TouchableOpacity style={[styles0.left,styles0.flex,styles.login_text]}>
                        <Text style={[styles0.fz11,styles0.gray]}>快速注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles0.right,styles0.flex,styles.login_text]} onPress={this.forgetPwd.bind(this)}>
                        <Text style={[styles0.fz11,styles0.color3b]}>忘记密码</Text>
                    </TouchableOpacity>
                </View>


                <View style={[styles0.flex,styles.login_p]}>
                    <View style={[styles0.row,styles0.center,styles0.flex,styles.login_pTxt]}>
                        <View style={[styles0.flex,styles0.topbor,styles.login_pLine]}></View>
                        <View style={[styles0.flex,styles0.center]}><Text style={[styles.fz11,styles.gray]}>快速登录</Text></View>
                        <View style={[styles0.flex,styles0.topbor,styles.login_pLine]}></View>
                    </View>
                    <View style={[styles0.row,styles0.center,styles0.vertical]}>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={LogoWechat} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={LogoSina} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={LogoQQ} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    login_p:{
        marginLeft:22,
        marginRight:22,
    },
    login_pTxt:{
        marginTop:25,
        marginBottom:12,
    },
    login_pLine:{
        height:1,
        borderColor:'#e4e4e4',
    },
    login_pLogo:{
        width:35,
        height:35,
        resizeMode:'contain',
    },
    login_text:{
        marginTop:15
    }
});