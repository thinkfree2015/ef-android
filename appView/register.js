/**
 * Created by qiuxi on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {styles as styles0} from './common/styles';
import Header from './common/header';
import {LoginInput,LoginButton,Authcode} from './common/nobusiness';




//主页
export default class Login extends Component {
    render() {
        return (
            <View style={styles.login}>
                <Header initObj={{title:'快速注册'}} />
                <LoginInput newObj={{placeholder:'请输入手机号'}}/>
                <Authcode newObj={{text:'获取验证码'}} />
                <LoginInput newObj={{placeholder:'请输入密码'}}/>
                <LoginInput newObj={{placeholder:'请再次输入密码'}}/>
                <LoginButton newObj={{text:'注     册'}}/>
                <View style={[styles0.flex,styles0.right,styles.btn_view]}>
                    <TouchableOpacity>
                        <Text style={[styles0.fz11,styles.btn_text]}>立即登录</Text>
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
    btn_text:{
        color:'#3b99ff'
    },






});